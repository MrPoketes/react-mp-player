import React from 'react';
import { PlayerControls } from '../PlayerControls/PlayerControls';

interface PlayerRootInterface {
	children?: React.ReactNode;
}

export const PlayerRoot: React.FC<PlayerRootInterface> = ({ children }) => {
	return (
		<div
			className="flex bg-white fixed bottom-0 w-1/2 left-1/4 my-3 h-32"
			style={{ boxShadow: '3px 3px 15px 2px rgba(0, 0, 0, 0.25)' }}
		>
			<div className="flex items-center mx-2">
				{children}
				<PlayerControls />
			</div>
		</div>
	);
};
