import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
	const {
		id,
		name,
		description,
		rent,
		consumption,
		deposit,
		moveInPrice,
		images,
		pictureLink,
	} = category;
	return (
		<div className='bg-white shadow-2xl min-h-[500px] group py-4 my-8'>
			<div className='overflow-hidden w-full'>
				{/* {images.map((image, index) => (
          // <div key={index}>{}</div>
        ))} */}

				<iframe
					title='room category title'
					width='100%'
					height='640'
					frameBorder='0'
					allow='xr-spatial-tracking; gyroscope; accelerometer'
					allowFullScreen
					src={pictureLink}
				></iframe>
			</div>
			<div className='bg-white shadow-lg max-w-[400px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-tertiary tracking-[1px] font-semibold text-base'>
				<div className='flex justify-between w-[100%]'>
					<div className='flex items-center gap-x-1 grid grid-cols-1 mx-auto lg:mx-2 sm:mx-2'>
						<div className='text-accent'>
							<div>Rent</div>
						</div>
						<div className='flex gap-x-1'>
							<div>{rent} DKK</div>
						</div>
					</div>
					<div className='flex items-center gap-x-1 grid grid-cols-1 mx-auto lg:mx-2 sm:mx-2'>
						<div className='text-accent'>Consumption</div>
						<div className='flex gap-x-1'>
							<div>{consumption} DKK</div>
						</div>
					</div>
					<div className='flex items-center gap-x-1 grid grid-cols-1 mx-auto lg:mx-2 sm:mx-2'>
						<div className='text-accent'>Move-In price</div>
						<div className='flex gap-x-1'>
							<div>{moveInPrice} DKK</div>
						</div>
					</div>
				</div>
			</div>
			<div className='text-center'>
				<Link to={`/category/${id}`}>
					<h3 className='h3'>{name}</h3>
				</Link>
			</div>
			<p className='mx-auto mb-6 lg:mx- sm:mx-3'>{description}</p>

			<Link
				to={`/category/${id}`}
				className='btn btn-secondary btn-sm max-w-[240px] mx-auto'
			>
				Read more
			</Link>

			<div className='mt-4'></div>
		</div>
	);
};

export default Category;
