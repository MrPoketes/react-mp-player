import React from 'react';

interface PlayerContextInterface {
	audioElement: HTMLAudioElement;
	isPlaying: boolean;
	playAudio: () => void;
	nextTrack: () => void;
	previousTrack: () => void;
}
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const PlayerContext = React.createContext<PlayerContextInterface>({} as any);
