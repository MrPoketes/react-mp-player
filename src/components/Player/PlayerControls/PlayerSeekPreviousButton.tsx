import { mdiSkipPrevious } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useContext } from 'react';
import { PlayerContext } from '../PlayerRoot/PlayerContext';
import { PlayerSeekButtonInterface } from './PlayerControls';

export const PlayerSeekPreviousButton: React.FC<PlayerSeekButtonInterface> = ({
	disabled = false
}) => {
	const { previousTrack } = useContext(PlayerContext);
	return (
		<button
			disabled={disabled}
			className={`w-8 h-8 rounded-full focus:ring-2 focus:outline-none focus:ring-blue-400 text-neutral-700 m-1 transition ease-in-out ${
				disabled ? 'cursor-not-allowed text-neutral-200' : ''
			}`}
			onClick={() => previousTrack()}
		>
			<Icon path={mdiSkipPrevious} />
		</button>
	);
};
