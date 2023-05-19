import React, { useEffect, useState } from 'react';

import { getSocials } from '../../../../api/socials';

function FollowUs() {
	const [socials, setSocials] = useState([]);

	useEffect(() => {
		async function fetchSocials() {
			const response = await getSocials();
			console.log(response);
			setSocials(response);
		}

		fetchSocials();
	}, []);
	return (
		<div>
			<h1 className='text-xl mb-5'>FollowUs</h1>
			<div className='flex justify-center gap-4 py-8 mb-5 bg-neutral-800'>
				{/* <div>facebook</div>
				<div>playstation</div>
				<div>twitter</div>
				<div>youtube</div> */}

				<ul className='flex align-middle gap-4 list-none w-full overflow-x-scroll scrollbar-hide hide-scrollbar mx-3'>
					{socials &&
						socials.length > 0 &&
						socials.map((social) => {
							return (
								<li key={social.id}>
									<a
										rel='noreferrer'
										target='_blank'
										href={social.url}
										className='hover:text-blue-500 transition duration-400'
									>
										{social.name}
									</a>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
}

export default FollowUs;
