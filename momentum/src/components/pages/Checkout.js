import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { Element } from 'react-scroll';
import CheckoutForm from './CheckoutForm';
const Checkout = ({ onCheckout }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const shippingUser = JSON.parse(localStorage.getItem('shippingUser'));

		console.log(shippingUser);
		setUser(shippingUser);
	}, []);

	const handleCheckout = (payload) => {
		alert('You have successfully placed the order. !!');
		onCheckout(payload);
	};

	return (
		<Element name='checkout'>
			<section className='checkout'>
				<div className='checkout__content container'>
					<h2 className='checkout__title'>Checkout here!</h2>
					<div className='checkout__body'>
						<h4>Hi, {user && user.fullName}</h4>
						<p>Please enter your shipping address and payment details!</p>

						<CheckoutForm onCheckout={handleCheckout} />
					</div>
				</div>
			</section>
		</Element>
	);
};

export default Checkout;
