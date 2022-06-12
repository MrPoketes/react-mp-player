import { mdiVolumeHigh, mdiVolumeLow, mdiVolumeMedium, mdiVolumeMute } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useContext, useState } from 'react';
import { PlayerContext } from '../PlayerRoot/PlayerContext';
import { PlayerSlider } from '../PlayerSlider/PlayerSlider';

export const PlayerVolumeController: React.FC = () => {
	const { audioElement } = useContext(PlayerContext);
	const [volume, setVolume] = useState(audioElement.volume * 100);
	return (
		<div className="flex w-full">
			<button className="w-8 h-8 flex-none rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-neutral-700 m-1 transition ease-in-out">
				<Icon
					path={
						audioElement.volume * 100 >= 70
							? mdiVolumeHigh
							: audioElement.volume * 100 >= 30
							? mdiVolumeMedium
							: audioElement.volume * 100 < 30 &&
							  audioElement.volume !== 0
							? mdiVolumeLow
							: mdiVolumeMute
					}
				/>
			</button>

			<PlayerSlider
				onValueChange={value => {
					audioElement.volume = value / 100;
					setVolume(value);
				}}
				value={volume}
				maxValue={100}
				stepValue={1}
				isMusicSlider={false}
			/>
		</div>
	);
};
