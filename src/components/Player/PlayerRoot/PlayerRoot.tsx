import React, { useRef, useState } from 'react';
import { PlayerControls } from '../PlayerControls/PlayerControls';
import { PlayerIcon } from '../PlayerIcon/PlayerIcon';
import { PlayerSlider } from '../PlayerSlider/PlayerSlider';
import { PlayerVolumeController } from '../PlayerVolumeController/PlayerVolumeController';
import { PlayerContext } from './PlayerContext';

interface TrackInterface {
	title: string;
	artist: string;
	imgSrc?: string;
	audioSrc: string;
}
interface PlayerRootInterface {
	tracks: TrackInterface[];
	showImage?: boolean;
}

export const PlayerRoot: React.FC<PlayerRootInterface> = ({
	tracks,
	showImage = true
}) => {
	const [trackIndex, setTrackIndex] = useState(0);

	const currentTrack = tracks[trackIndex];
	const audioRef = useRef<HTMLAudioElement>(new Audio(currentTrack.audioSrc));

	return (
		<PlayerContext.Provider value={{ audioElement: audioRef.current }}>
			<div
				className="flex bg-white fixed bottom-0 w-1/2 left-1/4 my-3 h-32"
				style={{ boxShadow: '3px 3px 15px 2px rgba(0, 0, 0, 0.25)' }}
			>
				<div className="mx-2 flex items-center w-full">
					{showImage && <PlayerIcon imgSrc={currentTrack.imgSrc} />}

					<div className="w-full flex flex-col items-center justify-end h-full mx-3">
						{/* Track info */}
						<p className="uppercase font-bold text-2xl">
							{currentTrack.title}
						</p>
						<p className="uppercase font-medium text-base">
							{currentTrack.artist}
						</p>
						{/* Music time slider */}
						<PlayerSlider maxValue={200} />
						{/* Playback controls */}
						<div className="grid grid-cols-3 w-full">
							<div />
							<PlayerControls />

							<PlayerVolumeController />
						</div>
					</div>
				</div>
			</div>
		</PlayerContext.Provider>
	);
};
