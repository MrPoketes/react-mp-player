import React from 'react';
import { PlayerControls } from '../PlayerControls/PlayerControls';
import { PlayerIcon } from '../PlayerIcon/PlayerIcon';
import { PlayerSlider } from '../PlayerSlider/PlayerSlider';

interface TrackInterface {
	title: string;
	artist: string;
	imgSrc?: string;
}
interface PlayerRootInterface {
	tracks: TrackInterface[];
	showImage?: boolean;
}

export const PlayerRoot: React.FC<PlayerRootInterface> = ({
	tracks,
	showImage = true
}) => {
	const currentTrack = tracks[0];
	return (
		<div
			className="flex bg-white fixed bottom-0 w-1/2 left-1/4 my-3 h-32"
			style={{ boxShadow: '3px 3px 15px 2px rgba(0, 0, 0, 0.25)' }}
		>
			<div className="mx-2 flex items-center w-full">
				{showImage && <PlayerIcon imgSrc={currentTrack.imgSrc} />}

				<div className="w-full flex flex-col items-center justify-end h-full mx-3">
					<p className="uppercase font-bold text-2xl">{currentTrack.title}</p>
					<p className="uppercase font-medium text-base">
						{currentTrack.artist}
					</p>
					<PlayerSlider maxValue={200} />
					<PlayerControls />
				</div>
			</div>
		</div>
	);
};
