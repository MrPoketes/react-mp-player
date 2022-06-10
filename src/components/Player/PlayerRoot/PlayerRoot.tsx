import React from 'react';

export const PlayerRoot: React.FC = ({ children }) => {
	return (
		<div
			className="flex justify-center items-center bg-white fixed bottom-0 w-1/2 left-1/4 my-3 h-32"
			style={{ boxShadow: '3px 3px 15px 2px rgba(0, 0, 0, 0.25)' }}
		>
			{children}
		</div>
	);
};
