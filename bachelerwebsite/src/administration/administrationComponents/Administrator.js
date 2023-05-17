import React, { useState, useEffect } from 'react';
import {
	getAdministrators,
	createAdministrator,
	updateAdministrator,
	deleteAdministrator,
} from '../../api/administrators';
import DeleteAdministrator from './DeleteAdministrator';
import AddAdministrator from './AddAdministrator';

import { useSelector } from 'react-redux';

const Administrator = () => {
	const user = useSelector((state) => state.auth.user);

	const [administrators, setAdministrators] = useState([]);
	const [selectedAdministrator, setSelectedAdministrator] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [formData, setFormData] = useState({
		firstName: '',
		surname: '',
		email: '',
		phone: '',
		role: '',
	});

	const [dataUpdated, setDataUpdated] = useState(false);

	useEffect(() => {
		fetchAdministrators();
	}, [dataUpdated]);

	useEffect(() => {}, [administrators]);
	const fetchAdministrators = async () => {
		try {
			const data = await getAdministrators();
			setAdministrators(data);
		} catch (error) {
			console.error('Error fetching administrators:', error);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			if (isEditing) {
				await updateAdministrator({
					...formData,
					id: selectedAdministrator.id,
				});
			} else {
				await createAdministrator(formData);
			}
			fetchAdministrators();
			resetForm();
		} catch (error) {
			console.error('Error submitting administrator:', error);
		}
	};

	const handleDelete = async (id) => {
		try {
			await deleteAdministrator(id);
			fetchAdministrators();
		} catch (error) {
			console.error('Error deleting administrator:', error);
		}
	};

	const resetForm = () => {
		setIsEditing(false);
		setSelectedAdministrator(null);
		setFormData({ name: '', email: '', phone: '', role: '' });
	};

	const handleEdit = (administrator) => {
		setIsEditing(true);
		setSelectedAdministrator(administrator);
		setFormData({
			firstName: administrator.firstName,
			surname: administrator.surname,
			email: administrator.email,
			phone: administrator.phone_number,
			role: administrator.roleid,
		});
	};

	const submitHandler = async (payload) => {
		// get existing customers

		const greatestId = administrators.reduce(
			(maxId, user) => Math.max(maxId, user.id),
			0
		);

		console.log(greatestId);
		const updatedPayload = {
			...payload,
			id: greatestId + 1,
		};

		const response = await createAdministrator(updatedPayload);
		if (response) {
			setDataUpdated(!dataUpdated);
		} else {
			alert('error creating administrator');
		}
	};

	const filteredAdministrators = administrators.filter((administrator) =>
		`${administrator.firstName} ${administrator.surname} ${administrator.email} ${administrator.phone_number}`
			.toLowerCase()
			.includes(searchQuery.toLowerCase())
	);

	return (
		<div className='pb-4 bg-white dark:bg-gray-900'>
			<h2 class='h2 text-center '>Employees</h2>

			<div className='-mx-3 flex flex-wrap items-center'>
				<div className='w-full sm:w-1/2 px-3'>
					<div className='mb-5'>
						<label htmlFor='table-search' className='sr-only'>
							Search
						</label>
						<div className='relative mt-1'>
							<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
								<svg
									className='w-5 h-5 text-gray-500 dark:text-gray-400'
									aria-hidden='true'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
										clipRule='evenodd'
									></path>
								</svg>
							</div>
							<input
								type='text'
								id='table-search'
								className='block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
								placeholder='Search for employees...'
								value={searchQuery}
								onChange={(event) => setSearchQuery(event.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className='w-full sm:w-1/2 px-3 text-right'>
					<div className='mb-5'>
						<AddAdministrator
							onSubmit={submitHandler}
							style={{ overflowY: 'scroll' }}
							disabled={user && user.roleId !== 1}
						/>
					</div>
				</div>
			</div>
			<div className='min-w-full'>
				<table className='min-w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
						<tr>
							<th scope='col' className='px-6 py-3'>
								Name
							</th>
							<th scope='col' className='px-6 py-3'>
								Email
							</th>
							<th scope='col' className='px-6 py-3'>
								Phone
							</th>
							<th scope='col' className='px-6 py-3'>
								Role
							</th>
							<th scope='col' className='px-6 py-3'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredAdministrators.map((administrator) => (
							<tr
								key={administrator.id}
								className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
							>
								<td
									scope='row'
									class='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
								>
									<div class='text-base font-semibold'>
										{administrator.firstName} {administrator.surname}
									</div>
								</td>
								<td className='px-6 py-4'>{administrator.email}</td>
								<td className='px-6 py-4'>{administrator.phone}</td>
								<td className='px-6 py-4'>
									{showRoleText(administrator.roleId)}
								</td>
								<td>
									<div class='inline-flex'>
										<DeleteAdministrator
											onDeleteComplet={(value) => setDataUpdated(!dataUpdated)}
											disabled={user && user.roleId !== 1}
											id={administrator.id}
										/>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Administrator;

// utility function
const showRoleText = (roleId) => {
	const roles = ['Manager', 'Administrator', 'Handy Man'];
	return roles[roleId - 1];
};
