import React from 'react';
import { createRoot } from 'react-dom/client';

import './tailwind.css';
import './App.css';
//Import any components you might need here
// import Main from './components/Main';
// import AllCampuses from './components/Campuses/AllCampuses';
// import SingleCampus from './components/Campuses/SingleCampus';
// import AllStudents from './components/Students/AllStudents';
// import SingleStudent from './components/Students/SingleStudent';

import NavBar from './components/NavBar/Index.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

/* Optionally, you can import and destructure 
   anything else you may need here from src/component/index.js
   Below is an example of that with Main   
*/
//import {Main} from "./components";

import store from './store/index.js';
import AddRecipe from './pages/Recipe/AddRecipePage';

// pages
import Home from './pages/Home/Index.js';
import Login from './pages/Login/Index.js';
import Register from './pages/Register/Index.js';
import Recipe from './pages/Recipe/Recipe';
import FollowPage from './pages/FollowPage/FollowPage';

const container = document.getElementById('root');
const root = createRoot(container);

//Some things might be missing here...
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<div className='applicaction'>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/recipies/add' element={<AddRecipe />} />
					<Route path='/recipies/:recipeId' element={<Recipe />} />
					<Route path='/following' element={<FollowPage />} />

					{/* <Route path='/campuses/:campusId' element={<SingleCampus />} />
					<Route path='/students' element={<AllStudents />} />
					<Route path='/students/:studentId' element={<SingleStudent />} /> */}

					{/* <Rotue path='/studetns' /> */}
				</Routes>
			</div>
		</Provider>
	</BrowserRouter>
);
