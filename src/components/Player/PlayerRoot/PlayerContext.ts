import React from 'react';

interface PlayerContextInterface {
	audioElement: HTMLAudioElement;
	nextTrack: () => void;
	previousTrack: () => void;
}

export const PlayerContext = React.createContext<PlayerContextInterface>({} as any);
