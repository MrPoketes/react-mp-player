import React from 'react';
import { PlayerControls } from '../components/Player/PlayerControls/PlayerControls';
import { PlayerPlayButton } from '../components/Player/PlayerControls/PlayerPlayButton';
import { PlayerSeekNextButton } from '../components/Player/PlayerControls/PlayerSeekNextButton';
import { PlayerSeekPreviousButton } from '../components/Player/PlayerControls/PlayerSeekPreviousButton';

export default {
	title: 'PlayerControls',
	component: PlayerControls
};

export const PlayButtonExample = () => <PlayerPlayButton />;

export const SeekNextButtonExample = () => <PlayerSeekNextButton />;

export const SeekPreviousButtonExample = () => <PlayerSeekPreviousButton />;

export const PlayerControlsExample = () => <PlayerControls />;
