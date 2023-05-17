import React, { useRef } from 'react';
import './Login.css';
const Login = (props) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();
		const paylaod = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		};
		props.onLogin(paylaod);
	};
	return (
		<form className='login' onSubmit={handleSubmit}>
			<h4>Login</h4>
			<p>Login with your email password</p>

			<div className='login__controls'>
				<div className='form-control'>
					<label htmlFor='email'>Email</label>
					<input
						ref={emailRef}
						type='email'
						placeholder='john@gmail.com'
						className='login__email'
						id='email'
					/>
				</div>

				<div className='form-control'>
					<label htmlFor='password'>Password</label>
					<input
						ref={passwordRef}
						type='password'
						className='login__email'
						id='password'
					/>
				</div>
			</div>

			<div className='login__action'>
				<input type='submit' value='Submit' className='btn login__submit' />
			</div>
		</form>
	);
};

export default Login;
