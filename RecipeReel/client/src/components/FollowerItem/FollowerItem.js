import React from 'react';

const FollowerItem = ({ user, mode, onClick }) => {
	const { username } = user;

	const handleFollowUnfollow = async (mode, userId) => {
		onClick(mode, userId);
	};

	return (
		<div className='flex items-center align-middle px-8 py-4 border border-b-2 border-green-700 justify-between'>
			<div className='follower-item__left flex align-middle items-center gap-4'>
				<h2
					style={{
						backgroundColor: getRandomColor(),
					}}
					className='bg-green-700 text-white rounded-full w-10 h-10 flex items-center align-middle justify-center font-bold text-xl'
				>
					{username.charAt(0)}
				</h2>
				<div>
					<h3 className='text-2xl'>{username}</h3>
					<p className='flex items-center gap-3 align-middle'>
						{/* <span>{followers.length} Followers</span>
						<span>{following.length} Followings</span> */}
					</p>
				</div>
			</div>

			<div className='follower-item__right'>
				<button
					onClick={(e) => {
						handleFollowUnfollow(mode, user.id);
					}}
					className={`py-2 px-3 border border-green-700 text-white rounded-md ${
						mode === 'following' ? 'bg-red-400' : 'bg-green-400'
					}`}
				>
					{mode === 'following' ? 'Unfollow' : 'Follow'}
				</button>
			</div>
		</div>
	);
};

export default FollowerItem;

function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
