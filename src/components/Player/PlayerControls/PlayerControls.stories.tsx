import React from 'react';
import { PlayerControls } from './PlayerControls';
import { PlayerPlayButton } from './PlayerPlayButton';
import { PlayerSeekNextButton } from './PlayerSeekNextButton';
import { PlayerSeekPreviousButton } from './PlayerSeekPreviousButton';

export default {
	title: 'PlayerControls',
	component: PlayerControls
};

export const PlayButtonExample = () => <PlayerPlayButton />;

export const SeekNextButtonExample = () => <PlayerSeekNextButton />;

export const SeekPreviousButtonExample = () => <PlayerSeekPreviousButton />;

export const PlayerControlsExample = () => <PlayerControls />;
