import React, { useRef, useState } from 'react';
import './CheckoutForm.css';
const CheckoutForm = (props) => {
	const addressRef = useRef();
	const cardNumberRef = useRef();
	const expiryDateRef = useRef();
	const cvcRef = useRef();

	const [cardNumber, setCardNumber] = useState('');
	const handleCheckoutSubmit = (event) => {
		event.preventDefault();

		const payload = {
			address: addressRef.current.value,
			cardNumber: cardNumber,
			expiryDate: expiryDateRef.current.value,
			cvc: cvcRef.current.value,
		};

		console.log(payload);

		// handle submission here
		props.onCheckout(payload);
	};

	const handleCardNumberChange = (event) => {
		let value = event.target.value
			.replace(/\s+/g, '')
			.replace(/(\d{4})/g, '$1 ')
			.trim();
		setCardNumber(value);
	};

	return (
		<form className='checkout-form' onSubmit={handleCheckoutSubmit}>
			<h4>Checkout</h4>
			<p>Enter your shipping address and payment details</p>

			<div className='checkout-form__controls'>
				<div className='form-control'>
					<label htmlFor='address'>Shipping Address</label>
					<input
						ref={addressRef}
						type='text'
						placeholder='123 Main St, New York, NY'
						className='checkout-form__address'
						id='address'
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='cardNumber'>Card Number</label>
					<input
						type='text'
						value={cardNumber}
						onChange={handleCardNumberChange}
						placeholder='1234 1234 1234 1234'
						className='checkout-form__cardNumber'
						id='cardNumber'
						maxLength='19'
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='expiryDate'>Expiry Date</label>
					<input
						ref={expiryDateRef}
						type='text'
						placeholder='MM/YY'
						className='checkout-form__expiryDate'
						id='expiryDate'
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='cvc'>CVC</label>
					<input
						ref={cvcRef}
						type='text'
						placeholder='123'
						className='checkout-form__cvc'
						id='cvc'
					/>
				</div>
			</div>

			<div className='checkout-form__action'>
				<input
					type='submit'
					value='Submit'
					className='btn checkout-form__submit'
				/>
			</div>
		</form>
	);
};

export default CheckoutForm;
