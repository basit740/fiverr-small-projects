import React from 'react';
import './Step.css';
const Index = (props) => {
	return (
		<div className='step'>
			<h3 className='step__title'>{props.title}</h3>
			<d className='step__body'>
				<p className='step__description'>{props.description}</p>
			</d>
		</div>
	);
};

export default Index;
