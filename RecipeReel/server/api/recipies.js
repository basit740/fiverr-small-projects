const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const { Recipe, User } = require('../db/index.js');

// GET all recipes
// Get all recipes with associated user
router.get('/', async (req, res) => {
	try {
		const recipes = await Recipe.findAll({
			include: [{ model: User }],
		});

		res.json(recipes);
	} catch (error) {
		console.error('Failed to fetch recipes:', error);
		res.status(500).json({ error: 'Failed to fetch recipes' });
	}
});

// Get single recipe with associated user
router.get('/:id', async (req, res) => {
	try {
		const recipe = await Recipe.findOne({
			where: { id: req.params.id },
			include: [{ model: User }],
		});

		if (!recipe) {
			return res.status(404).json({ error: 'Recipe not found' });
		}

		res.json(recipe);
	} catch (error) {
		console.error('Failed to fetch recipe:', error);
		res.status(500).json({ error: 'Failed to fetch recipe' });
	}
});

// CREATE a new recipe
const path = require('path');

router.post('/', verifyToken, (req, res) => {
	const {
		recipeName,
		description,
		ingredients,
		instructions,
		dietaryRestrictions,
		categoryId,
	} = req.body;
	const { userId } = req; // Assuming the user ID is extracted from the authentication token

	console.log(userId);

	// Check if files were uploaded
	if (!req.files) {
		return res.status(400).json({ error: 'No image files provided' });
	}

	console.log(req.body);

	// console.log(req.body);

	// console.log('files');
	// console.log(req.files);

	// return;
	// Handle multiple image files
	const images = [];
	const imageFiles = Array.isArray(req.files.images)
		? req.files.images
		: [req.files.images];

	// Move and save the image files
	imageFiles.forEach((imageFile) => {
		const imageFileName = `${userId}-${Date.now()}-${imageFile.name}`;
		const imagePath = path.join(
			__dirname,
			'../public/images/recipies',
			imageFileName
		);
		// const imagePath =
		// 	process.env.SERVER_URL + '/public/images/recipies/' + imageFileName;

		imageFile.mv(imagePath, (error) => {
			if (error) {
				console.error('Failed to save image:', error);
				return res.status(500).json({ error: 'Failed to save image' });
			}
		});

		images.push(process.env.SERVER_URL + `/images/recipies/${imageFileName}`);
	});

	console.log(req.body);

	// Create the recipe with the associated images

	const parsedIngredients = JSON.parse(ingredients);
	const parsedInstructions = JSON.parse(instructions);
	const parsedDietaryRestrictions = JSON.parse(dietaryRestrictions);
	Recipe.create({
		recipeName,
		description,
		ingredients: parsedIngredients,
		instructions: parsedInstructions,
		images,
		dietaryRestrictions: parsedDietaryRestrictions,
		userId, // Associate the recipe with the user
	})
		.then((recipe) => {
			res.status(201).json(recipe);
		})
		.catch((error) => {
			console.error('Failed to create recipe:', error);
			res.status(500).json({ error: 'Failed to create recipe' });
		});
});

// UPDATE an existing recipe
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const recipeData = req.body;
	try {
		const recipe = await Recipe.findByPk(id);
		if (recipe) {
			await recipe.update(recipeData);
			res.json(recipe);
		} else {
			res.status(404).json({ error: 'Recipe not found' });
		}
	} catch (error) {
		console.error('Failed to update recipe:', error);
		res.status(500).json({ error: 'Failed to update recipe' });
	}
});

// DELETE an existing recipe
router.delete('/:id', verifyToken, async (req, res) => {
	const { id } = req.params;
	try {
		const recipe = await Recipe.findByPk(id);
		if (recipe) {
			await recipe.destroy();
			res.json({ message: 'Recipe deleted successfully' });
		} else {
			res.status(404).json({ error: 'Recipe not found' });
		}
	} catch (error) {
		console.error('Failed to delete recipe:', error);
		res.status(500).json({ error: 'Failed to delete recipe' });
	}
});

module.exports = router;
