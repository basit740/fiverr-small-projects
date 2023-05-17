import React, { useRef } from 'react';
import './Register.css';
const Register = (props) => {
	const fullNameRef = useRef();
	// const phoneRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();

		const payload = {
			fullName: fullNameRef.current.value,
			// phone: phoneRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};
		props.onRegister(payload);
	};
	return (
		<form className='register' onSubmit={handleSubmit}>
			<h4>Register</h4>
			<p>Register with your email password</p>

			<div className='register__controls'>
				<div className='form-control'>
					<label htmlFor='email'>Full Name</label>
					<input
						ref={fullNameRef}
						type='text'
						placeholder='Alica'
						className='register__full-name'
						id='email'
					/>
				</div>

				{/* <div className='form-control'>
					<label htmlFor='email'>Phone Number</label>
					<input
						// ref={phoneRef}
						type='text'
						placeholder='+182838353'
						className='register__phone-number'
						id='email'
					/>
				</div> */}
				<div className='form-control'>
					<label htmlFor='email'>Email</label>
					<input
						ref={emailRef}
						type='email'
						placeholder='john@gmail.com'
						className='register__email'
						id='email'
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='password'>Password</label>
					<input
						ref={passwordRef}
						type='password'
						className='register__email'
						id='password'
					/>
				</div>
			</div>

			<div className='register__actions'>
				<input type='submit' value='Submit' className='btn register__submit' />
			</div>
		</form>
	);
};

export default Register;
