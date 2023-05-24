import React from 'react';
import { createRoot } from 'react-dom/client';
//Import any components you might need here
import Main from './components/Main';
import AllCampuses from './components/Campuses/AllCampuses';
import SingleCampus from './components/Campuses/SingleCampus';
import AllStudents from './components/Students/AllStudents';
import SingleStudent from './components/Students/SingleStudent';

import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

/* Optionally, you can import and destructure 
   anything else you may need here from src/component/index.js
   Below is an example of that with Main   
*/
//import {Main} from "./components";

import store from './store/index.js';

const container = document.getElementById('root');
const root = createRoot(container);

//Some things might be missing here...
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<div className='applicaction'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/campuses' element={<AllCampuses />} />
					<Route path='/campuses/:campusId' element={<SingleCampus />} />
					<Route path='/students' element={<AllStudents />} />
					<Route path='/students/:studentId' element={<SingleStudent />} />

					{/* <Rotue path='/studetns' /> */}
				</Routes>
			</div>
		</Provider>
	</BrowserRouter>
);
