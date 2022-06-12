import React from 'react';

interface PlayerContextInterface {
	audioElement: HTMLAudioElement;
	isPlaying: boolean;
	playAudio: () => void;
	nextTrack: () => void;
	previousTrack: () => void;
}

export const PlayerContext = React.createContext<PlayerContextInterface>({} as any);
