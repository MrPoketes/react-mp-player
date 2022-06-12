import React from 'react';
import { PlayerPlayButton } from './PlayerPlayButton';
import { PlayerSeekNextButton } from './PlayerSeekNextButton';
import { PlayerSeekPreviousButton } from './PlayerSeekPreviousButton';

interface PlayerControlsInterface {
	nextDisabled?: boolean;
	previousDisabled?: boolean;
}

export interface PlayerSeekButtonInterface {
	disabled?: boolean;
}

export const PlayerControls: React.FC<PlayerControlsInterface> = ({
	nextDisabled = false,
	previousDisabled = false
}) => {
	return (
		<div className="flex items-center justify-center">
			<PlayerSeekPreviousButton disabled={previousDisabled} />
			<PlayerPlayButton />
			<PlayerSeekNextButton disabled={nextDisabled} />
		</div>
	);
};
