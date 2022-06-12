import { useEffect, useState } from 'react';

/**
 * "usePlaying is a custom hook that returns a boolean and a setter function for that boolean, and it
 * also calls a callback function when the boolean changes."
 *
 * The first line of the function is the type declaration. It's a bit long, but it's not too bad. The
 * first part is the return type. It's an array of two elements. The first element is a boolean, and
 * the second element is a function that takes a React.SetStateAction<boolean> and returns void
 * @param [initialState=false] - The initial state of the hook.
 * @param cbPlay - () => void - This is a callback function that will be called when the state is set
 * to true.
 * @param cbPaused - () => void
 * @returns A custom hook that returns a boolean and a function to set the boolean.
 */
export const usePlaying = (
	initialState = false,
	cbPlay: () => void,
	cbPaused: () => void
): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
	const [isPlaying, setIsPlaying] = useState(initialState);

	useEffect(() => {
		if (isPlaying) {
			cbPlay();
		} else {
			cbPaused();
		}
	}, [isPlaying]);

	return [isPlaying, setIsPlaying];
};
