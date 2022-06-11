import React, { useState } from 'react';

import * as Slider from '@radix-ui/react-slider';

interface PlayerSlideInterface {
	maxValue: number; //in seconds
	isMusicSlider?: boolean;
	stepValue?: number;
}

export const PlayerSlider: React.FC<PlayerSlideInterface> = ({
	maxValue,
	stepValue = 1,
	isMusicSlider = true
}) => {
	const [value, setValue] = useState(0);
	return (
		<div className="flex items-center w-full space-x-2">
			{isMusicSlider && (
				<p className="text-neutral-800 text-sm font-medium">
					{convertToTime(value)}
				</p>
			)}

			<Slider.Root
				onValueChange={value => setValue(value[0])}
				className="relative flex items-center w-full h-3"
				step={stepValue}
				max={maxValue}
			>
				<Slider.Track className="relative bg-neutral-200 flex-grow rounded-md h-3">
					<Slider.Range className="absolute bg-neutral-700 h-full rounded-md" />
				</Slider.Track>
			</Slider.Root>
			{isMusicSlider && (
				<p className="text-neutral-800 text-sm font-medium">
					{convertToTime(maxValue)}
				</p>
			)}
		</div>
	);
};

const convertToTime = (value: number): string => {
	const minutes = `${Math.floor(value / 60)}`;
	const seconds = `${value % 60}`;
	const doubleDigitSeconds = seconds.length === 1 ? `0${seconds}` : seconds;
	return `${minutes}:${doubleDigitSeconds}`;
};
