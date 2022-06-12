import React from 'react';
import { PlayerSlider } from '../components/PlayerSlider/PlayerSlider';

export default {
	title: 'PlayerSlider',
	component: PlayerSlider
};

export const Example = () => <PlayerSlider maxValue={200} value={0} />;
