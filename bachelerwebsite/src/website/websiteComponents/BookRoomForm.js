import React, { useState, useRef, useEffect } from 'react';
import { Phone } from 'react-telephone';
import { getCountryCallingCode } from 'libphonenumber-js';
import { useCountries } from 'use-react-countries';
import { Select, Option } from '@material-tailwind/react';
import { arrivalList } from './Arrival';
import { departureList } from './Departure';
import { categoryData } from '../data/CategoryData';
import InfoModal from './InfoModal';

import {
	getCustomers,
	createCustomer,
	updateCustomer,
	deleteCustomer,
} from '../../api/customers';
import {
	deleteRoomBookings,
	createRoomBookings,
	getRoomBookings,
	updateRoomBookings,
} from '../../api/roombookings';
import { getRooms } from '../../api/rooms';
const BookRoomForm = () => {
	const { countries } = useCountries();

	const [customers, setCustomers] = useState([]);
	const [newId, setNewId] = useState(0);
	const [rooms, setRooms] = useState([]);
	const [size, setSize] = useState(null);
	const [isChecked, setIsChecked] = useState(false);
	const handleOpen = (value) => setSize(value);
	const [countryCode, setCountryCode] = useState('');
	const [nationality, setNationality] = useState('');
	const [country, setCountry] = useState('');
	const [roomBookings, setRoomBookings] = useState([]);
	const [dataIsUpdated, setDataIsUpdated] = useState(false);

	const [selectedRoomId, setSelectedRoomId] = useState(null);
	const [startRentDate, setStartRentDate] = useState(null);
	const [endRentDate, setEndRentDate] = useState(null);

	const [loading, setLoading] = useState(false);

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
	const roomIdRef = useRef();
	const arrivalRef = useRef();
	const departureRef = useRef();

	// load current customers
	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		console.log(roomBookings);
		console.log(rooms);
		// if(roomBookings && roomBookings.length > 0){
		// 	const updated = rooms.map(room=>{
		// 		if(room.id===roomBookings.)
		// 	})
		// }
	}, [dataIsUpdated]);

	// const fetchCustomers = async () => {
	// 	try {
	// 		const data = await getCustomers();
	// 		setCustomers(data);
	// 	} catch (error) {
	// 		console.error('Error fetching customers:', error);
	// 	}
	// };

	// const fetchRooms = async () => {
	// 	try {
	// 		const data = await getRooms();
	// 		setRooms(data);
	// 	} catch (error) {
	// 		console.error('Error fetching rooms:', error);
	// 	}
	// };

	// const fetchRoomBookings = async () => {
	// 	try {
	// 		const data = await getRoomBookings();
	// 		setRoomBookings(data);
	// 		setDataIsUpdated(!dataIsUpdated);
	// 	} catch (error) {
	// 		console.error('Error fetching room bookings:', error);
	// 	}
	// };

	const fetchData = async () => {
		try {
			// customers
			const customersData = await getCustomers();
			setCustomers(customersData);
			const bookingsData = await getRoomBookings();
			const roomsData = await getRooms();

			// modifying to disable rooms which are already booked
			roomsData.forEach((room) => {
				room.booked = bookingsData.some(
					(booking) => booking.roomId === room.id
				);
				if (!room.booked) {
					room.booked = false;
				}
			});

			console.log('modified', roomsData);

			setRooms(roomsData);

			setRoomBookings(bookingsData);
			// setRooms(roomsData);
		} catch (error) {
			console.error('Error fetching room bookings:', error);
		}
	};
	const handleSubmit = async (e) => {
		setLoading(true);

		// Create the customer payload
		const greatestId = customers.reduce(
			(maxId, user) => Math.max(maxId, user.id),
			0
		);
		const customerPayload = {
			id: greatestId + 1,
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
				? null
				: idRef.current.value,
			idNumber: nationalIdRadioRef.current.checked ? idRef.current.value : null,
		};

		for (let key in customerPayload) {
			if (customerPayload[key] === null) {
				delete customerPayload[key];
			}
		}

		// Create the customer

		//
		console.log(customerPayload);

		const createdCustomer = await createCustomer(customerPayload);
		console.log(createdCustomer);
		// console.log(createdCustomer);

		const customerId = createdCustomer.id;

		// Create the room booking payload
		const greatestBookingId = roomBookings.reduce(
			(maxId, booking) => Math.max(maxId, booking.id),
			0
		);

		const roomBookingPayload = {
			id: greatestBookingId + 1,
			customerId: customerId && customerId.toString(),
			roomId: selectedRoomId && selectedRoomId,
			startRentDate: startRentDate && startRentDate.toISOString(),
			endRentDate: endRentDate && endRentDate.toISOString(),
		};

		console.log(roomBookingPayload);

		// Create the room booking
		const createdRoomBooking = await createRoomBookings(roomBookingPayload);
		const latestBookings = await getRoomBookings();

		const modifiedRooms = getModifiedRooms(latestBookings, rooms);

		console.log(modifiedRooms);

		setRooms((prev) => [...modifiedRooms]);

		console.log(createdRoomBooking);

		setLoading(false);

		alert(`Congts ${fNameRef.current.value}! Your room has been booked!`);
	};

	return (
		<div className='min-h-screen' style={{ overflowY: 'scroll' }}>
			<div class='flex items-center justify-center p-10 py-10'>
				<div class='mx-auto w-full max-w-[550px]'>
					<div class='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
						<h2 class='h2 text-center '>Booking</h2>
						<p class='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
							You're just one step away from your new home. Thank you for
							choosing our student housing campus. Please fill out the booking
							information and we'll take care of the rest.
						</p>
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
												onChange={(e) => setCountryCode(e.target.value)}
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
											size='lg'
											label='Select Nationality'
											onChange={(value) => setNationality(value)}
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
											size='lg'
											label='Select Country'
											onChange={(value) => setCountry(value)}
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
										name='radio1'
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
										name='radio1'
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

						<div class='mb-5'>
							<label
								class='mb-3 block text-base font-medium text-[#07074D]'
								for='roomNumberDropDown'
							>
								Room Number
							</label>
							<div
								className='w-full border '
								name='roomNumberDropDown'
								id='roomNumberDropDown'
							>
								<Select
									size='lg'
									label='Select Room Number'
									onChange={(value) => setSelectedRoomId(value)}
								>
									{rooms.map((room) => (
										<Option
											key={room.id}
											value={room.id}
											disabled={room.booked}
											title={room.booked ? 'Already booked' : ''}
										>
											{room.number}
										</Option>
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
											onChange={(value) => setStartRentDate(value)}
										>
											{arrivalList.map((option) => (
												<Option key={option.value} value={option.value}>
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
											onChange={(value) => setEndRentDate(value)}
										>
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

						<InfoModal
							loading={loading}
							onClick={handleSubmit}
							firstName={fNameRef.current && fNameRef.current.value}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BookRoomForm;

function getModifiedRooms(bookingsData, roomsData) {
	roomsData.forEach((room) => {
		room.booked = bookingsData.some((booking) => booking.roomId === room.id);
		if (!room.booked) {
			room.booked = false;
		}
	});
	return roomsData;
}

/*


{
    "id":2,
    "roomId": "2",
    "customerId": "120",
    "startRentDate": "2023-11-08T00:00:00",
    "endRentDate": "2023-12-08T00:00:00"
  
}


*/
