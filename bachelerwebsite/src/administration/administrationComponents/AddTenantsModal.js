import { React, Fragment, useState, useRef } from 'react';
import { Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import { useCountries } from 'use-react-countries';
import { Phone } from 'react-telephone';
import { getCountryCallingCode } from 'libphonenumber-js';
import { Select, Option } from '@material-tailwind/react';
import { arrivalList } from '../../website/websiteComponents/Arrival';
import { departureList } from '../../website/websiteComponents/Departure';
import { categoryData } from '../../website/data/CategoryData';
const AddTenantsModal = ({ onSubmit, disabled }) => {
	const [size, setSize] = useState(null);
	const [isChecked, setIsChecked] = useState(false);
	const handleOpen = (value) => setSize(value);
	const { countries } = useCountries();
	const [countryCode, setCountryCode] = useState('');
	const [nationality, setNationality] = useState('');
	const [country, setCountry] = useState('');

	const [startOfProg, setStartOfProg] = useState('');
	const [endOfProg, setEndOfProg] = useState('');

	const [roomCategory, setRoomCategory] = useState('');

	const [arrivalDate, setArrivalDate] = useState('');
	const [departureDate, setDepartureDate] = useState('');

	const fNameRef = useRef();
	const lNameRef = useRef();
	const emailRef = useRef();
	const phoneRef = useRef();
	const nationalRef = useRef();
	const countyCodeRef = useRef();
	const countryRef = useRef();
	const cityRef = useRef();
	const postCodeRef = useRef();
	const streetNameRef = useRef();
	const streetNumberRef = useRef();
	const nationalIdRadioRef = useRef();
	const idRef = useRef();
	const passportRef = useRef();
	const universityRef = useRef();
	const studyProgRef = useRef();
	const startOfProgRef = useRef();
	const endOfProgRef = useRef();
	const roomCatRef = useRef();
	const arrivalDateRef = useRef();
	const departureDateRef = useRef();

	const handleSubmit = (e) => {
		const payload = {
			firstName: fNameRef.current.value,
			surname: lNameRef.current.value,
			email: emailRef.current.value,
			phoneNumber:
				'+' +
				getCountryCallingCode(countryCode.toUpperCase()) +
				phoneRef.current.value,
			nationality: nationality,
			country: country,
			streetName: streetNameRef.current.value,
			streetNumber: streetNumberRef.current.value,
			postalCode: postCodeRef.current.value,
			city: cityRef.current.value,
			passportNumber: nationalIdRadioRef.current.checked
				? ''
				: idRef.current.value,
			idNumber: nationalIdRadioRef.current.checked
				? idRef.current.value
				: 'null',
		};

		onSubmit(payload);
		handleOpen(null);
	};

	return (
		<Fragment>
			<div>
				<button
					className={`bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ${
						disabled ? 'add-disabled' : ''
					}`}
					disabled={disabled}
					onClick={() => handleOpen('lg')}
				>
					Add Tenant
				</button>
			</div>
			<Dialog open={size === 'lg'} size={size} handler={handleOpen}>
				<DialogBody divider>
					<div style={{ overflow: 'hidden' }}>
						<div style={{ overflowY: 'auto', maxHeight: '500px' }}>
							<div className='min-h-screen'>
								<div class='flex items-center justify-center p-10 py-10'>
									<div class='mx-auto w-full max-w-[550px]'>
										<div class='py-4 lg:py-4 px-4 mx-auto max-w-screen-md'>
											<h2 class='h2 text-center '>Add a new tenant</h2>

											<div class='-mx-3 flex flex-wrap'>
												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label
															for='fName'
															class='mb-3 block text-base font-medium text-[#07074D]'
														>
															First Name
														</label>
														<input
															ref={fNameRef}
															type='text'
															name='firstName'
															id='firstName'
															placeholder='First Name'
															class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
														/>
													</div>
												</div>

												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label
															for='lName'
															class='mb-3 block text-base font-medium text-[#07074D]'
														>
															Last Name
														</label>
														<input
															ref={lNameRef}
															type='text'
															name='lName'
															id='lName'
															placeholder='Last Name'
															class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
														/>
													</div>
												</div>
											</div>

											<div class='mb-5'>
												<label class='mb-3 block text-base font-medium text-[#07074D]'>
													Email
												</label>
												<div class='flex items-center space-x-6'>
													<div class='flex items-center w-full'>
														<input
															ref={emailRef}
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
												<div class='-mx-3 flex flex-wrap'>
													<div class='w-full px-3 sm:w-1/2'>
														<div>
															<label
																for='cCode'
																class='mb-3 block text-base font-medium text-[#07074D]'
															>
																Country Code
															</label>
															<Phone>
																<Phone.Country
																	ref={countryRef}
																	onChange={(e) =>
																		setCountryCode(e.target.value)
																	}
																	className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
																/>
															</Phone>
														</div>
													</div>
													<div class='w-full px-3 sm:w-1/2'>
														<div>
															<label
																for='pNumber'
																class='mb-3 block text-base font-medium text-[#07074D]'
															>
																Phone number
															</label>
															<Phone>
																<Phone.Number
																	ref={phoneRef}
																	className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
																/>
															</Phone>
														</div>
													</div>
												</div>
											</div>
											<div class='-mx-3 flex flex-wrap'>
												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label class='mb-3 block text-base font-medium text-[#07074D]'>
															Nationality
														</label>
														<div className='w-full'>
															<Select
																ref={nationalRef}
																onChange={(value) => setNationality(value)}
																size='lg'
																label='Select Nationality'

																// selected={(element) =>
																// 	element &&
																// 	React.cloneElement(element, {
																// 		className:
																// 			'flex items-center px-0 gap-2 pointer-events-none',
																// 	})
																// }
															>
																{countries.map(({ name, flags }) => (
																	<Option
																		key={name}
																		value={name}
																		className='flex items-center gap-2'
																	>
																		<img
																			src={flags.svg}
																			alt={name}
																			className='h-5 w-5 rounded-full object-cover'
																		/>
																		{name}
																	</Option>
																))}
															</Select>
														</div>
													</div>
												</div>
												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label class='mb-3 block text-base font-medium text-[#07074D]'>
															Country
														</label>
														<div className='w-full'>
															<Select
																onChange={(value) => setCountry(value)}
																size='lg'
																label='Select Country'
																// selected={(element) =>
																// 	element &&
																// 	React.cloneElement(element, {
																// 		className:
																// 			'flex items-center px-0 gap-2 pointer-events-none',
																// 	})
																// }
															>
																{countries.map(({ name, flags }) => (
																	<Option
																		key={name}
																		value={name}
																		className='flex items-center gap-2'
																	>
																		<img
																			src={flags.svg}
																			alt={name}
																			className='h-5 w-5 rounded-full object-cover'
																		/>
																		{name}
																	</Option>
																))}
															</Select>
														</div>
													</div>
												</div>
											</div>
											<div class='-mx-3 flex flex-wrap'>
												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label
															for='city'
															class='mb-3 block text-base font-medium text-[#07074D]'
														>
															City
														</label>
														<input
															ref={cityRef}
															type='text'
															name='city'
															id='city'
															placeholder='City'
															class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
														/>
													</div>
												</div>
												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label
															for='pCode'
															class='mb-3 block text-base font-medium text-[#07074D]'
														>
															Postcode
														</label>
														<input
															ref={postCodeRef}
															type='text'
															name='pCode'
															id='pCode'
															placeholder='Postcode'
															class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
														/>
													</div>
												</div>

												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label
															for='sName'
															class='mb-3 block text-base font-medium text-[#07074D]'
														>
															Street Name
														</label>
														<input
															ref={streetNameRef}
															type='text'
															name='sName'
															id='sName'
															placeholder='Street Name'
															class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
														/>
													</div>
												</div>
												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label
															for='sNumber'
															class='mb-3 block text-base font-medium text-[#07074D]'
														>
															Street Number
														</label>
														<input
															ref={streetNumberRef}
															type='text'
															name='sNumber'
															id='sNumber'
															placeholder='Street Nr/House Nr'
															class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
														/>
													</div>
												</div>
											</div>
											<div class='mb-5'>
												<label class='mb-3 block text-base font-medium text-[#07074D]'>
													Personal Identification
												</label>
												<div class='flex items-center space-x-6'>
													<div class='flex items-center'>
														<input
															type='radio'
															value='idNumber'
															name='id'
															id='nationalIDNumber'
															class='h-5 w-5'
															ref={nationalIdRadioRef}
														/>
														<label
															for='nationalIDNumber1'
															class='pl-3 text-base font-medium text-[#07074D]'
														>
															National ID Number
														</label>
													</div>
													<div class='flex items-center'>
														<input
															type='radio'
															value='passportNumber'
															name='id'
															id='passportNumber'
															class='h-5 w-5'
														/>
														<label
															for='passportNumber'
															class='pl-3 text-base font-medium text-[#07074D]'
														>
															Passport Number
														</label>
													</div>
												</div>
											</div>
											<div class='mb-5'>
												<div class='flex items-center space-x-6'>
													<div class='flex items-center w-full'>
														<input
															ref={idRef}
															type='text'
															name='Personal Identification'
															id='personalIdentification'
															placeholder='National ID Number/Passport Number'
															class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
														/>
													</div>
												</div>
											</div>
											{/* 
											<div class='-mx-3 flex flex-wrap'>
												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label class='mb-3 block text-base font-medium text-[#07074D]'>
															University
														</label>
														<div class='flex items-center space-x-6'>
															<div class='flex items-center w-full'>
																<input
																	ref={universityRef}
																	type='text'
																	name='university'
																	id='university'
																	placeholder='University'
																	class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
																/>
															</div>
														</div>
													</div>
												</div>
												<div class='w-full px-3 sm:w-1/2'>
													<div class='mb-5'>
														<label class='mb-3 block text-base font-medium text-[#07074D]'>
															Study programme
														</label>
														<div class='flex items-center space-x-6'>
															<div class='flex items-center w-full'>
																<input
																	ref={studyProgRef}
																	type='text'
																	name='sProgramme'
																	id='sProgramme'
																	placeholder='Study programme'
																	class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class='-mx-3 flex flex-wrap'>
												<div className='w-full px-3 sm:w-1/2'>
													<div className='mb-5'>
														<label
															className='mb-3 block text-base font-medium text-[#07074D]'
															htmlFor='sProgram'
														>
															Start Of Programme
														</label>
														<div
															className='w-full border '
															name='sProgram'
															id='sProgram'
														>
															<Select
																size='lg'
																label='Select Date'
																onChange={(value) => setStartOfProg(value)}
															>
																{arrivalList.map((option) => (
																	<Option
																		key={option.value}
																		value={option.value}
																	>
																		{option.name}
																	</Option>
																))}
															</Select>
														</div>
													</div>
												</div>
												<div className='w-full px-3 sm:w-1/2'>
													<div className='mb-5'>
														<label
															className='mb-3 block text-base font-medium text-[#07074D]'
															htmlFor='eProgram'
														>
															End Of Programme
														</label>
														<div
															className='w-full border '
															name='eProgram'
															id='eProgram'
														>
															<Select
																size='lg'
																label='Select Date'
																onChange={(value) => setEndOfProg(value)}
															>
																{departureList.map((option) => (
																	<Option
																		key={option.value}
																		value={option.value}
																	>
																		{option.name}
																	</Option>
																))}
															</Select>
														</div>
													</div>
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
													<Select
														size='lg'
														label='Select Room Category'
														onChange={(value) => setRoomCategory(value)}
													>
														{categoryData.map((category) => (
															<Option key={category.id}>{category.name}</Option>
														))}
													</Select>
												</div>
											</div>
											<div class='-mx-3 flex flex-wrap'>
												<div className='w-full px-3 sm:w-1/2'>
													<div className='mb-5'>
														<label
															className='mb-3 block text-base font-medium text-[#07074D]'
															htmlFor='arrivalDepartureDropDown'
														>
															Arrival Date
														</label>
														<div
															className='w-full border '
															name='arrivalDepartureDropDown'
															id='arrivalDepartureDropDown'
														>
															<Select
																size='lg'
																label='Select Date'
																onChange={(value) => setArrivalDate(value)}
															>
																{arrivalList.map((option) => (
																	<Option
																		key={option.value}
																		value={option.value}
																	>
																		{option.name}
																	</Option>
																))}
															</Select>
														</div>
													</div>
												</div>
												<div className='w-full px-3 sm:w-1/2'>
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
															<Select
																size='lg'
																label='Select Date'
																onChange={(value) => setDepartureDate(value)}
															>
																{departureList.map((option) => (
																	<Option
																		key={option.value}
																		value={option.value}
																	>
																		{option.name}
																	</Option>
																))}
															</Select>
														</div>
													</div>
												</div>
											</div> */}
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
								<button
									onClick={(e) => handleSubmit(e)}
									className='btn btn-secondary btn-sm w-full mx-auto'
								>
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
export default AddTenantsModal;
