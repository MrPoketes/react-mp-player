import React from 'react';
import { PlayerPlayButton } from './PlayerPlayButton';
import { PlayerSeekNextButton } from './PlayerSeekNextButton';
import { PlayerSeekPreviousButton } from './PlayerSeekPreviousButton';

export const PlayerControls: React.FC = () => {
	return (
		<div className="flex items-center">
			<PlayerSeekPreviousButton />
			<PlayerPlayButton />
			<PlayerSeekNextButton />
		</div>
	);
};
