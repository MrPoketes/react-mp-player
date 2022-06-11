import React from 'react';
import { Player } from './Player';

export default {
	title: 'Player',
	component: Player
};

export const Example = () => (
	<Player
		tracks={[
			{
				imgSrc: 'https://images5.alphacoders.com/896/896907.png',
				artist: 'Lisa',
				title: 'Adamas'
			}
		]}
	/>
);
