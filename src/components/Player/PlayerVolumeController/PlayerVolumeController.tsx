import { mdiVolumeHigh } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';
import { PlayerSlider } from '../PlayerSlider/PlayerSlider';

export const PlayerVolumeController: React.FC = () => {
	return (
		<div className="flex w-full">
			<button className="w-8 h-8 flex-none rounded-full focus:ring-2 focus:ring-blue-400 text-neutral-700 m-1 transition ease-in-out">
				<Icon path={mdiVolumeHigh} />
			</button>

			<PlayerSlider
				initialValue={50}
				maxValue={100}
				stepValue={1}
				isMusicSlider={false}
			/>
		</div>
	);
};
