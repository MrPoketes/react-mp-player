import { mdiSkipNext } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';

export const PlayerSeekNextButton: React.FC = () => {
	return (
		<button className="w-8 h-8 rounded-full focus:ring-2 focus:ring-blue-400 text-neutral-700 m-1 transition ease-in-out">
			<Icon path={mdiSkipNext} />
		</button>
	);
};
