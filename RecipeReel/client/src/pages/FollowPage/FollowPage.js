import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FollowerItem from '../../components/FollowerItem/FollowerItem';

const FollowPage = () => {
	const [userData, setUserData] = useState(null);
	const [selected, setSelected] = useState('followers');
	const [dataUpdated, setDataUpdated] = useState(false);

	const handleFollowUnfollow = async (mode, userId) => {
		console.log(mode, userId);
		let url = '';
		if (mode === 'following') {
			// unfollow the user
			url = process.env.REACT_APP_API_SERVER + `/api/users/${userId}/unfollow`;
		} else {
			// follow the user

			url = process.env.REACT_APP_API_SERVER + `/api/users/${userId}/follow`;
		}

		const token = localStorage.getItem('token');

		console.log(url);

		const response = await axios.post(url, null, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		console.log(response);
		setDataUpdated(!dataUpdated);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = localStorage.getItem('token');
				const response = await axios.get(
					process.env.REACT_APP_API_SERVER + '/api/auth/me',
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					}
				);
				console.log(response.data);
				setUserData(response.data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [dataUpdated]);

	if (!userData) return <div>Loading...</div>;

	const { firstName, lastName, username, image, followers, following } =
		userData;

	return (
		<div className='follow-page mt-10 container mx-auto'>
			<div className='follow-page__user flex align-middle items-center gap-4'>
				{/* <img
					src={image}
					className='border border-green-800 block rounded'
					alt={username}
				/> */}

				<h2 className='bg-green-700 text-white rounded-full w-16 h-16 flex items-center align-middle justify-center font-bold text-2xl'>
					{firstName.charAt(0)}
				</h2>

				<div>
					<h3 className='text-2xl'>{`${firstName} ${lastName}`}</h3>
					<p className='flex items-center gap-3 align-middle'>
						<span>{followers.length} Followers</span>
						<span>{following.length} Followings</span>
					</p>
				</div>
			</div>

			<div className='navigation mt-16 mb-10 flex justify-between container mx-auto max-w-md'>
				<button
					onClick={() => setSelected('followers')}
					className={` p-2 text-3xl font-bold ${
						selected === 'followers' ? 'border-b-4 border-b-slate-900' : ''
					}`}
				>
					Followers
				</button>
				<button
					onClick={() => setSelected('following')}
					className={`p-2 text-3xl font-bold ${
						selected === 'following' ? 'border-b-4 border-b-slate-900' : ''
					}`}
				>
					Following
				</button>
			</div>

			<div className='follower-item-list'>
				{selected === 'followers' ? (
					<>
						{followers.map((follower) => {
							return (
								<FollowerItem
									key={follower.id}
									mode='followers'
									user={follower}
									onClick={handleFollowUnfollow}
								/>
							);
						})}
					</>
				) : (
					<>
						{following.map((followingUser) => {
							return (
								<FollowerItem
									key={followingUser.id}
									mode='following'
									user={followingUser}
									onClick={handleFollowUnfollow}
								/>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default FollowPage;
