import { useState, useEffect } from 'react';

import { scroller } from 'react-scroll';
import TopBar from '../TopBar/Index';
import TitleBox from '../TitleBox';
import Body from '../Body/index';

import Modal from '../Modal/Index';
import Login from '../Login/Index';
import Register from '../Register/Index';
import Checkout from './Checkout';

import { useNavigate } from 'react-router-dom';

const Home = () => {
	const navigate = useNavigate();
	const [openModal, setOpenModal] = useState(false);
	const [openRegister, setOpenRegister] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);
	const [user, setUser] = useState(null);
	const [moveToCheckout, setMoveToCheckout] = useState(false);

	const handleLoginClick = () => {
		setOpenModal(true);
		setOpenLogin(true);
		setOpenRegister(false);
	};

	const handleRegisterClick = () => {
		setOpenModal(true);
		setOpenLogin(false);
		setOpenRegister(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const onPaymentClick = () => {
		if (user) {
			// navigate('/checkout');
			// setMoveToCheckout(true);

			// scroll to checkout
			moveToCheckoutSmooth();
		} else {
			handleRegisterClick();
		}
	};

	const handleRegister = (payload) => {
		setUser(payload);
		localStorage.setItem('shippingUser', JSON.stringify(payload));
		setOpenRegister(false);
		setOpenLogin(true);
	};

	const handleLogin = (payload) => {
		if (user.email === payload.email && user.password === payload.password) {
			setOpenModal(false);
			setMoveToCheckout(true);

			// scroll to checkout
			moveToCheckoutSmooth();
		} else {
			alert('Invalid Credentials!!!!!');
		}
	};

	const handleCheckout = (payload) => {};

	useEffect(() => {
		const shippingUser = JSON.parse(localStorage.getItem('shippingUser'));

		setUser(shippingUser);
	}, []);
	return (
		<div className='home'>
			{openModal === true && (
				<Modal onCloseModal={handleCloseModal}>
					{openLogin === true && <Login onLogin={handleLogin} />}
					{openRegister === true && <Register onRegister={handleRegister} />}
				</Modal>
			)}
			<TopBar
				onClickLogin={handleLoginClick}
				onClickRegister={handleRegisterClick}
				user={user}
			/>
			<TitleBox />
			<Body onPaymentClick={onPaymentClick} />
			{/* {moveToCheckout && <Checkout />} */}

			<Checkout onCheckout={handleCheckout} />
		</div>
	);
};

export default Home;

function moveToCheckoutSmooth() {
	scroller.scrollTo('checkout', {
		duration: 800,
		delay: 0,
		smooth: 'easeInOut',
	});
}
