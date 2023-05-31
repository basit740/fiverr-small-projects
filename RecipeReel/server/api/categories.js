const router = require('express').Router();

const { Category } = require('../db/index.js');
// GET all categories
router.get('/', async (req, res) => {
	try {
		const categories = await Category.findAll();
		res.json(categories);
	} catch (error) {
		console.error('Failed to fetch categories:', error);
		res.status(500).json({ error: 'Failed to fetch categories' });
	}
});

// GET a specific category by ID
router.get('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const category = await Category.findByPk(id);
		if (category) {
			res.json(category);
		} else {
			res.status(404).json({ error: 'Category not found' });
		}
	} catch (error) {
		console.error('Failed to fetch category:', error);
		res.status(500).json({ error: 'Failed to fetch category' });
	}
});

// CREATE a new category
router.post('/', async (req, res) => {
	const categoryData = req.body;
	try {
		const category = await Category.create(categoryData);
		res.status(201).json(category);
	} catch (error) {
		console.error('Failed to create category:', error);
		res.status(500).json({ error: 'Failed to create category' });
	}
});

// PUT/update an existing category
router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const categoryData = req.body;
	try {
		const category = await Category.findByPk(id);
		if (category) {
			await category.update(categoryData);
			res.json(category);
		} else {
			res.status(404).json({ error: 'Category not found' });
		}
	} catch (error) {
		console.error('Failed to update category:', error);
		res.status(500).json({ error: 'Failed to update category' });
	}
});

// DELETE an existing category
router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const category = await Category.findByPk(id);
		if (category) {
			await category.destroy();
			res.json({ message: 'Category deleted successfully' });
		} else {
			res.status(404).json({ error: 'Category not found' });
		}
	} catch (error) {
		console.error('Failed to delete category:', error);
		res.status(500).json({ error: 'Failed to delete category' });
	}
});

module.exports = router;
