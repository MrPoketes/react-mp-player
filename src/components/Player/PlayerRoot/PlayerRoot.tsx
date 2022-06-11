import React from 'react';
import { PlayerControls } from '../PlayerControls/PlayerControls';
import { PlayerSlider } from '../PlayerSlider/PlayerSlider';

interface PlayerRootInterface {
	children?: React.ReactNode;
}

export const PlayerRoot: React.FC<PlayerRootInterface> = ({ children }) => {
	return (
		<div
			className="flex bg-white fixed bottom-0 w-1/2 left-1/4 my-3 h-32"
			style={{ boxShadow: '3px 3px 15px 2px rgba(0, 0, 0, 0.25)' }}
		>
			<div className="mx-2 flex items-center w-full">
				{children}
				<div className="w-full flex flex-col items-center justify-end h-full mx-3">
					<PlayerSlider maxValue={200} />
					<PlayerControls />
				</div>
			</div>
		</div>
	);
};
