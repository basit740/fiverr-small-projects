import { Fragment, useState } from 'react';
import {
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
} from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
export default function InfoModal({ firstName, onClick, loading }) {
	const [size, setSize] = useState(null);
	const [isChecked, setIsChecked] = useState(false);
	const handleOpen = (value) => setSize(value);
	const navigate = useNavigate();
	const message = `Dear ${firstName},
  

  Thank you for choosing Kamtjatka Student Village as your new home. We are thrilled to have you as part of our community!
  
  Seeing this message means that you have successfully completed the booking form with your personal information. You are now one step closer to becoming a resident of Kamtjatka Student Village.
  
  Once you have completed the payment process, you will receive a unique code via email. This code is necessary for you to create an account on our platform, so please keep it safe and secure.
  
  Please note that your unique code will be sent to you shortly after your payment has been processed. To create an account with us, please go to the administration page on our website. You will find all the necessary information there.
  
  If you have any questions or concerns, please don't hesitate to contact us. We are always here to assist you.
  
  We look forward to welcoming you to Kamtjatka Student Village!
  
  Sincerely,
  The Kamtjatka Student Village Team`;

	const formattedMessage = message
		.split('\n')
		.map((para) => <p className='mb-4'>{para}</p>);

	return (
		<Fragment>
			<div>
				<button
					className='btn btn-secondary btn-sm w-full mx-auto'
					// onClick={() => handleOpen("xl")}
					onClick={() => onClick()}
					variant='gradient'
				>
					{loading ? 'please wait...' : 'Continue'}
				</button>
			</div>
			<Dialog open={size === 'xl'} size={size} handler={handleOpen}>
				<DialogHeader className='fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'>
					<div
						className='font-serif 
          '
					>
						Must read before booking!
					</div>
				</DialogHeader>
				<DialogBody divider>
					<div className='font-serif text-l'>{formattedMessage}</div>
				</DialogBody>
				<div class='flex items-center'>
					<input
						id='link-checkbox'
						type='checkbox'
						class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-5 mt-3'
						checked={isChecked}
						onChange={(e) => setIsChecked(e.target.checked)}
					/>
					<label
						for='link-checkbox'
						className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-3'
					>
						By checking this box, I confirm that I have read and understood all
						the information provided.
					</label>
				</div>
				<DialogFooter>
					<div class='-mx-3 flex flex-wrap w-full'>
						<div class='w-full px-3 sm:w-1/2 '>
							<div class='mb-5 '>
								<button
									onClick={() => handleOpen(null)}
									className='btn btn-secondary btn-sm w-full mx-auto'
								>
									Cancel
								</button>
							</div>
						</div>
						<div class='w-full px-3 sm:w-1/2'>
							<div class='mb-5'>
								<button
									onClick={() => {
										if (isChecked) {
											handleOpen();
											navigate('/BachelorWebApp/checkout');
										}
									}}
									className={`btn btn-secondary btn-sm w-full mx-auto ${
										!isChecked
											? 'bg-gray-500 bg-opacity-50 cursor-not-allowed disabled:pointer-events-none'
											: ''
									}`}
									disabled={!isChecked}
								>
									Confirm
								</button>
							</div>
						</div>
					</div>
				</DialogFooter>
			</Dialog>
		</Fragment>
	);
}
