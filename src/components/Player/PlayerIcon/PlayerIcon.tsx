import React from 'react';

interface PlayerIconInterface {
	imgSrc: string;
}

export const PlayerIcon: React.FC<PlayerIconInterface> = ({ imgSrc }) => {
	return <img src={imgSrc} className="w-28 h-28 rounded-full object-cover" />;
};
