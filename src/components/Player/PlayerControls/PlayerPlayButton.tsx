import React, { useContext, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPause, mdiPlay } from '@mdi/js';
import { PlayerContext } from '../PlayerRoot/PlayerContext';

export const PlayerPlayButton: React.FC = () => {
	const [paused, setPaused] = useState(true);
	const { audioElement } = useContext(PlayerContext);

	return (
		<button
			className="w-8 h-8 rounded-full focus:ring-2 focus:ring-blue-400 text-neutral-700 m-1 transition ease-in-out"
			onClick={() => {
				if (paused) {
					audioElement.play();
				} else {
					audioElement.pause();
				}
				setPaused(!paused);
			}}
		>
			<Icon path={paused ? mdiPlay : mdiPause} />
		</button>
	);
};
