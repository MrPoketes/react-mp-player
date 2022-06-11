import React, { useState } from 'react';
import clsx from 'clsx';
import Icon from '@mdi/react';
import { mdiPause, mdiPlay } from '@mdi/js';

export const PlayerPlayButton: React.FC = () => {
	const [paused, setPaused] = useState(true);

	return (
		<button
			className="w-10 h-10 rounded-full focus:ring-2 focus:ring-blue-400 text-neutral-700 m-1 transition ease-in-out"
			onClick={() => setPaused(!paused)}
		>
			<Icon path={paused ? mdiPlay : mdiPause} />
		</button>
	);
};
