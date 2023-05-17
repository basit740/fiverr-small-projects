import React from 'react';
import './HowItWorks.css';

import Step from './Step/Index';

const steps = [
	{
		title: 'Step 1',
		description: 'This is step 1 description',
	},
	{
		title: 'Step 2',
		description: 'This is step 2 description ',
	},
];
const Index = () => {
	return (
		<section className='how-it-works'>
			<h2>How It Works</h2>
			<div className='how-it-works__body'>
				<Step title={steps[0].title} description={steps[0].description} />
				<Step title={steps[1].title} description={steps[1].description} />
			</div>
		</section>
	);
};

export default Index;
