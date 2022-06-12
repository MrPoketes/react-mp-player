import React from 'react';
import { Player } from '../components/Player';
import tracks from './tracks';
export default {
	title: 'Player',
	component: Player
};

export const Example = () => <Player tracks={tracks} />;
