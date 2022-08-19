import React, { useEffect, useRef, useState } from 'react';
import { useIsMounted } from '../../hooks/useIsMounted';
import { usePlaying } from '../../hooks/usePlaying';
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
	const [trackTime, setTrackTime] = useState(0);
	const currentTrack = tracks.length > 0 ? tracks[trackIndex] : null;
	const audioRef = useRef(new Audio(currentTrack?.audioSrc));
	const [isPlaying, setIsPlaying] = usePlaying(
		false,
		() => {
			audioRef.current.play();
			startTimer();
		},
		() => audioRef.current.pause()
	);
	/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
	const intervalRef: any = useRef();

	const isReady = useIsMounted();

	const startTimer = () => {
		clearInterval(intervalRef.current);

		// Every 1second update track time, or if track finished, go to next track
		intervalRef.current = setInterval(() => {
			if (audioRef.current.ended) {
				nextTrack();
			} else {
				setTrackTime(audioRef.current.currentTime);
			}
		}, 1000);
	};

	const previousTrack = (): void => {
		if (trackIndex - 1 >= 0) {
			audioRef.current.currentTime = 0;
			setTrackIndex(trackIndex - 1);
		}
	};

	const nextTrack = (): void => {
		if (trackIndex + 1 < tracks.length) {
			audioRef.current.currentTime = 0;
			setTrackIndex(trackIndex + 1);
		} else {
			setIsPlaying(false);
		}
	};

	const seek = (time: number): void => {
		startTimer();
		audioRef.current.currentTime = time;
		setTrackTime(audioRef.current.currentTime);
	};

	/* 
	1. It is using the useEffect hook to pause the current audio track.
	2. It is then creating a new Audio object with the current track's audioSrc.
	3. It is then checking if the audio is ready to play.
	4. If the audio is ready to play, it is setting the current time to 0, setting the volume to the
	volume of the previous track, setting the track time to the current time of the audio, playing the
	audio, and setting the isPlaying state to true. 
	*/
	useEffect(() => {
		audioRef.current.pause();
		const { volume } = audioRef.current;
		audioRef.current = new Audio(currentTrack?.audioSrc);
		if (isReady) {
			audioRef.current.currentTime = 0;
			audioRef.current.volume = volume;
			setTrackTime(audioRef.current.currentTime);
			audioRef.current.play();
			setIsPlaying(true);
		}
	}, [trackIndex]);

	// Unmount
	useEffect(() => {
		return () => {
			audioRef.current.pause();
			setIsPlaying(false);
			clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<PlayerContext.Provider
			value={{
				audioElement: audioRef.current,
				isPlaying: isPlaying,
				playAudio: () => setIsPlaying(!isPlaying),
				nextTrack: () => nextTrack(),
				previousTrack: () => previousTrack()
			}}
		>
			<div
				className="flex bg-white fixed bottom-0 w-1/2 left-1/4 my-3 h-32"
				style={{ boxShadow: '3px 3px 15px 2px rgba(0, 0, 0, 0.25)' }}
			>
				<div className="mx-2 flex items-center w-full">
					{showImage && <PlayerIcon imgSrc={currentTrack?.imgSrc} />}

					<div className="w-full flex flex-col items-center justify-end h-full mx-3">
						{/* Track info */}
						<p className="uppercase font-bold text-2xl">
							{currentTrack?.title}
						</p>
						<p className="uppercase font-medium text-base">
							{currentTrack?.artist}
						</p>
						{/* Music time slider */}
						<PlayerSlider
							value={trackTime}
							maxValue={
								isNaN(audioRef.current.duration)
									? 0
									: audioRef.current.duration
							}
							onValueChange={value => seek(value)}
						/>
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
