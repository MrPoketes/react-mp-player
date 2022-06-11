import React from 'react';
import { Player } from '../components/Player/Player';
import tracks from '../components/Player/PlayerRoot/tracks';
export default {
	title: 'Player',
	component: Player
};

export const Example = () => <Player tracks={tracks} />;
