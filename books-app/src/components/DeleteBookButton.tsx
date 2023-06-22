import React from 'react';

interface DeleteBookButtonProps {
	id: number;
	onDelete: (id: number) => void;
}

const DeleteBookButton: React.FC<DeleteBookButtonProps> = ({
	id,
	onDelete,
}) => {
	const handleClick = () => {
		onDelete(id);
	};

	return (
		<button onClick={handleClick} className='text-red-500 hover:underline'>
			Delete
		</button>
	);
};

export default DeleteBookButton;
