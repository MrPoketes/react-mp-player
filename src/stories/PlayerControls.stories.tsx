import React from 'react';
import { PlayerControls } from '../components/PlayerControls/PlayerControls';
import { PlayerPlayButton } from '../components/PlayerControls/PlayerPlayButton';
import { PlayerSeekNextButton } from '../components/PlayerControls/PlayerSeekNextButton';
import { PlayerSeekPreviousButton } from '../components/PlayerControls/PlayerSeekPreviousButton';

export default {
	title: 'PlayerControls',
	component: PlayerControls
};

export const PlayButtonExample = () => <PlayerPlayButton />;

export const SeekNextButtonExample = () => <PlayerSeekNextButton />;

export const SeekPreviousButtonExample = () => <PlayerSeekPreviousButton />;

export const PlayerControlsExample = () => <PlayerControls />;
