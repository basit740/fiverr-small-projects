import { React, Fragment, useState } from 'react';
import { Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import { useCountries } from 'use-react-countries';
import { Phone } from 'react-telephone';
import { Select, Option } from '@material-tailwind/react';
import { arrivalList } from '../../website/websiteComponents/Arrival';
import { departureList } from '../../website/websiteComponents/Departure';
import { categoryData } from '../../website/data/CategoryData';
const EditTenantsModal = ({ disabled }) => {
	const [size, setSize] = useState(null);
	const [isChecked, setIsChecked] = useState(false);
	const handleOpen = (value) => setSize(value);
	const { countries } = useCountries();
	return (
		<Fragment>
			<div>
				<button
					className={`text-white bg-[#fde68a] hover:bg-[#fcd34d] focus:outline-none focus:ring-4  
          focus:ring-amber-300  dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-900 font-bold  py-2 px-4 rounded-l ${
						disabled ? 'edit-disabled' : ''
					}`}
					onClick={() => handleOpen('sm')}
					disabled={disabled}
				>
					Edit
				</button>
			</div>
			<Dialog open={size === 'sm'} size={size} handler={handleOpen}>
				<DialogBody divider>
					<div style={{ overflow: 'hidden' }}>
						<div style={{ overflowY: 'auto', maxHeight: '500px' }}>
							<div className='min-h-screen'>
								<div class='flex items-center justify-center p-10 py-10'>
									<div class='mx-auto w-full max-w-[550px]'>
										<div class='py-4 lg:py-2 px-4 mx-auto max-w-screen-md'>
											<h2 class='h2 text-center '>Edit Tenant</h2>

											<div class='mb-5'>
												<label
													for='fName'
													class='mb-3 block text-base font-medium text-[#07074D]'
												>
													First Name
												</label>
												<input
													type='text'
													name='firstName'
													id='firstName'
													placeholder='First Name'
													class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
												/>
											</div>

											<div class='mb-5'>
												<label
													for='lName'
													class='mb-3 block text-base font-medium text-[#07074D]'
												>
													Last Name
												</label>
												<input
													type='text'
													name='lName'
													id='lName'
													placeholder='Last Name'
													class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
												/>
											</div>

											<div class='mb-5'>
												<label class='mb-3 block text-base font-medium text-[#07074D]'>
													Email
												</label>
												<div class='flex items-center space-x-6'>
													<div class='flex items-center w-full'>
														<input
															type='text'
															name='email'
															id='email'
															placeholder='Email'
															class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
														/>
													</div>
												</div>
											</div>
											<div class='mb-5'>
												<div>
													<label
														for='cCode'
														class='mb-3 block text-base font-medium text-[#07074D]'
													>
														Country Code
													</label>
													<Phone>
														<Phone.Country className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' />
													</Phone>
												</div>
												<div class='mt-5'>
													<label
														for='pNumber'
														class='mb-3 block text-base font-medium text-[#07074D]'
													>
														Phone number
													</label>
													<Phone>
														<Phone.Number className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' />
													</Phone>
												</div>
											</div>

											<div class='mb-5'>
												<label
													class='mb-3 block text-base font-medium text-[#07074D]'
													for='roomCategoryDropDown'
												>
													Room Category
												</label>
												<div
													className='w-full border '
													name='roomCategoryDropDown'
													id='roomCategoryDropDown'
												>
													<Select size='lg' label='Select Room Category'>
														{categoryData.map((category) => (
															<Option key={category.id}>{category.name}</Option>
														))}
													</Select>
												</div>
											</div>
											<div class='mb-5'>
												<label
													class='mb-3 block text-base font-medium text-[#07074D]'
													for='roomCategoryDropDown'
												>
													Room Number
												</label>
												<div
													className='w-full border '
													name='roomCategoryDropDown'
													id='roomCategoryDropDown'
												>
													<Select size='lg' label='Select Room Number'>
														{categoryData.map((category) => (
															<Option key={category.id}>{category.name}</Option>
														))}
													</Select>
												</div>
											</div>

											<div className='mb-5'>
												<label
													className='mb-3 block text-base font-medium text-[#07074D]'
													htmlFor='departureDepartureDropDown'
												>
													Departure Date
												</label>
												<div
													className='w-full border '
													name='departureDepartureDropDown'
													id='departureDepartureDropDown'
												>
													<Select size='lg' label='Select Date'>
														{departureList.map((option) => (
															<Option key={option.value} value={option.value}>
																{option.name}
															</Option>
														))}
													</Select>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</DialogBody>
				<DialogFooter>
					<div class='-mx-3 flex flex-wrap w-full'>
						<div class='w-full px-3 sm:w-1/2 '>
							<div class='mb-5 '>
								<button
									onClick={() => handleOpen(null)}
									className='btn btn-secondary btn-sm w-full mx-auto'
								>
									Cancel
								</button>
							</div>
						</div>
						<div class='w-full px-3 sm:w-1/2'>
							<div class='mb-5'>
								<button className='btn btn-secondary btn-sm w-full mx-auto'>
									Confirm
								</button>
							</div>
						</div>
					</div>
				</DialogFooter>
			</Dialog>
		</Fragment>
	);
};
export default EditTenantsModal;
