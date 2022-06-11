import React, { useEffect, useRef, useState } from 'react';
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
	const [audioState, setAudioState] = useState(new Audio(currentTrack.audioSrc));

	const previousTrack = (): void => {
		if (trackIndex - 1 <= 0) {
			setTrackIndex(trackIndex - 1);
		}
	};

	const nextTrack = (): void => {
		console.log(tracks);
		if (trackIndex + 1 < tracks.length) {
			setTrackIndex(trackIndex + 1);
		}
	};

	// Handle changing tracks
	useEffect(() => {
		audioState.pause();
		setAudioState(new Audio(currentTrack.audioSrc));
	}, [trackIndex]);

	return (
		<PlayerContext.Provider
			value={{
				audioElement: audioState,
				nextTrack: () => nextTrack(),
				previousTrack: () => previousTrack()
			}}
		>
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
						<PlayerSlider maxValue={200} onValueChange={() => {}} />
						{/* Playback controls */}
						<div className="grid grid-cols-3 w-full">
							<div />
							<PlayerControls
								nextDisabled={trackIndex + 1 >= tracks.length}
								previousDisabled={trackIndex - 1 < 0}
							/>

							<PlayerVolumeController />
						</div>
					</div>
				</div>
			</div>
		</PlayerContext.Provider>
	);
};
