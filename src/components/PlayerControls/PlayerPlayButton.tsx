import React, { useContext } from 'react';
import Icon from '@mdi/react';
import { mdiPause, mdiPlay } from '@mdi/js';
import { PlayerContext } from '../PlayerRoot/PlayerContext';

export const PlayerPlayButton: React.FC = () => {
	const { isPlaying, playAudio } = useContext(PlayerContext);

	return (
		<button
			className="w-8 h-8 rounded-full focus:ring-2 focus:outline-none focus:ring-blue-400 text-neutral-700 m-1 transition ease-in-out"
			onClick={() => playAudio()}
		>
			<Icon path={isPlaying ? mdiPause : mdiPlay} />
		</button>
	);
};
