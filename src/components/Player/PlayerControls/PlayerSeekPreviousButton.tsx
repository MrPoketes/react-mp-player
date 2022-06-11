import { mdiSkipPrevious } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';

export const PlayerSeekPreviousButton: React.FC = () => {
	return (
		<button className="w-10 h-10 rounded-full focus:ring-2 focus:ring-blue-400 text-neutral-700 m-1 transition ease-in-out">
			<Icon path={mdiSkipPrevious} />
		</button>
	);
};
