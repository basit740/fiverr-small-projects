import React from 'react';
import './PaymentPlan.css';
const Index = (props) => {
	const handleyPayment = () => {
		props.onPaymentClick();
	};
	return (
		<div className='payment' onClick={handleyPayment}>
			<div className='payment__content'>
				<h4 className='payment__title'>Monthly</h4>
				<div className='payment__price-box'>
					<span className='price__per-unit'>Pay per box</span>
					<p className='price__number'>$60.00</p>
					<span className='price__billing-period'>Billed monthly</span>
				</div>
				<div className='payment__plan'>
					<ul className='plan__features'>
						<li className='plan__feature'>
							<span className='plan__feature-tick'>&#10003;</span>Monthly Box
							with upto 8 products
						</li>
						<li className='plan__feature'>
							<span className='plan__feature-tick'>&#10003;</span>4
							Customizations
						</li>
						<li className='plan__feature'>
							<span className='plan__feature-tick'>&#10003;</span>Unlimited Swap
							for Credit
						</li>
						<li className='plan__feature'>
							<span className='plan__feature-tick'>&#10003;</span>Early access
							to Customize
						</li>
						<li className='plan__feature'>
							<span className='plan__feature-tick'>&#10003;</span>Cancel anytime
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Index;
