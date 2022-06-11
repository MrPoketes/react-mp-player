import React from 'react';

interface PlayerContextInterface {
	audioElement: HTMLAudioElement;
}

export const PlayerContext = React.createContext<PlayerContextInterface>({
	audioElement: null as any
});
