import React from 'react';
import './Modal.css';
const Index = (props) => {
	return (
		<div className='modal'>
			<div className='modal__content'>
				<button className='btn__close' onClick={props.onCloseModal}>
					X
				</button>
				{props.children}
			</div>
		</div>
	);
};

export default Index;
