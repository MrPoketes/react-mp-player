import { mdiSkipNext } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useContext } from 'react';
import { PlayerContext } from '../PlayerRoot/PlayerContext';
import { PlayerSeekButtonInterface } from './PlayerControls';

export const PlayerSeekNextButton: React.FC<PlayerSeekButtonInterface> = ({
	disabled = false
}) => {
	const { nextTrack } = useContext(PlayerContext);
	return (
		<button
			disabled={disabled}
			className={`w-8 h-8 rounded-full focus:ring-2 focus:ring-blue-400 text-neutral-700 m-1 transition ease-in-out ${
				disabled ? 'cursor-not-allowed text-neutral-200' : ''
			}`}
			onClick={() => nextTrack()}
		>
			<Icon path={mdiSkipNext} />
		</button>
	);
};
