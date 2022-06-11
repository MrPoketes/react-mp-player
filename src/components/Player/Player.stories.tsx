import React from 'react';
import { Player } from './Player';

export default {
	title: 'Player',
	component: Player.Root
};

export const Example = () => (
	<Player.Root>
		<Player.Icon imgSrc="https://images5.alphacoders.com/896/896907.png" />
	</Player.Root>
);
