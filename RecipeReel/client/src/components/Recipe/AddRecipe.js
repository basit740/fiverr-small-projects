import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
	const [recipeName, setRecipeName] = useState('');
	const [description, setDescription] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const [instructions, setInstructions] = useState([]);
	const [images, setImages] = useState([]);
	const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState('');

	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchCategories();
	}, []);

	const fetchCategories = async () => {
		try {
			const response = await axios.get(
				process.env.REACT_APP_API_SERVER + '/api/categories'
			);
			setCategories(response.data);
		} catch (error) {
			console.error('Error fetching categories:', error);
		}
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case 'recipeName':
				setRecipeName(value);
				break;
			case 'description':
				setDescription(value);
				break;
			case 'ingredients':
				setIngredients(value.split(','));
				break;
			case 'instructions':
				setInstructions(value.split(','));
				break;
			case 'dietaryRestrictions':
				setDietaryRestrictions(value.split(','));
				break;
			case 'category':
				setSelectedCategory(value);
				break;
			default:
				break;
		}
	};

	const handleFileChange = (e) => {
		const files = e.target.files;
		// Limit the number of images to 6
		if (files.length > 6) {
			alert('You can only attach up to 6 images.');
			return;
		}
		setImages(files);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			// Calculate total characters
			const totalCharacters =
				recipeName.length +
				description.length +
				ingredients.join('').length +
				instructions.join('').length +
				dietaryRestrictions.join('').length;

			// Check if total characters exceed the limit
			if (totalCharacters > 2000) {
				alert('Total characters cannot exceed 2000.');
				return;
			}

			const formData = new FormData();
			formData.append('recipeName', recipeName);
			formData.append('description', description);
			formData.append('ingredients', JSON.stringify(ingredients));
			formData.append('instructions', JSON.stringify(instructions));
			for (let i = 0; i < images.length; i++) {
				formData.append('images', images[i]);
			}
			formData.append(
				'dietaryRestrictions',
				JSON.stringify(dietaryRestrictions)
			);
			formData.append('categoryId', +selectedCategory);
			const token = localStorage.getItem('token'); // Retrieve the token from localStorage

			const response = await axios.post(
				process.env.REACT_APP_API_SERVER + '/api/recipies',
				formData,
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Authorization: `Bearer ${token}`, // Add the token to the Authorization header
					},
				}
			);

			setLoading(false);
			console.log(response);
			console.log('Recipe created:', response.data);
			// Perform any additional actions after the recipe is created

			// Reset the form fields
			setRecipeName('');
			setDescription('');
			setIngredients([]);
			setInstructions([]);
			setImages([]);
			setDietaryRestrictions([]);
			setSelectedCategory('');
			navigate('/');
		} catch (error) {
			setLoading(false);
			alert(error);
			console.error('Error creating recipe:', error.message);
		}
	};

	return (
		<div className='container mt-6 max-w-xl'>
			<h2 className='mb-4 text-2xl'>Add Recipe</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label htmlFor='recipeName'>Recipe Name:</label>
					<input
						type='text'
						id='recipeName'
						name='recipeName'
						value={recipeName}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='description'>Description:</label>
					<textarea
						id='description'
						name='description'
						value={description}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='ingredients'>
						Ingredients (separated by commas):
					</label>
					<input
						type='text'
						id='ingredients'
						name='ingredients'
						value={ingredients}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='instructions'>
						Instructions (separated by commas):
					</label>
					<input
						type='text'
						id='instructions'
						name='instructions'
						value={instructions}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='images'>Images (up to 6 images):</label>
					<input
						type='file'
						id='images'
						name='images'
						accept='image/*'
						multiple
						onChange={handleFileChange}
						className='w-full'
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='dietaryRestrictions'>
						Dietary Restrictions (separated by commas):
					</label>
					<input
						type='text'
						id='dietaryRestrictions'
						name='dietaryRestrictions'
						value={dietaryRestrictions}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border rounded-md'
						required
					/>
				</div>
				<div className='mb-4'>
					<label htmlFor='category'>Category:</label>
					<select
						id='category'
						name='category'
						value={selectedCategory}
						onChange={handleInputChange}
						className='w-full px-3 py-2 border rounded-md'
						required
					>
						<option value=''>Select a category</option>
						{categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.title}
							</option>
						))}
					</select>
				</div>
				<button
					type='submit'
					className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-9'
				>
					{loading ? 'Adding...' : 'Add Recipe'}
				</button>
			</form>
		</div>
	);
};

export default AddRecipe;
