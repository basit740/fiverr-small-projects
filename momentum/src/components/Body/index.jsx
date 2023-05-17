import React from 'react';
import './page-body.css';

import HowItWorks from '../HowItWorks/Index';
import PaymentPlan from '../PaymentPlan/Index';
export default function Body(props) {
	return (
		<div className='page-body'>
			<div className='page-body__content container'>
				<p>
					Join our community of dedicated moms who prioritize their well-being
					and fitness. Take the first step towards achieving your fitness goals
					today!
				</p>
				<HowItWorks />
				<PaymentPlan onPaymentClick={props.onPaymentClick} />
			</div>
		</div>
	);
}
