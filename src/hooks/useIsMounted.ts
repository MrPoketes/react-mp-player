import { useEffect, useRef } from 'react';

/**
 * UseIsMounted returns a boolean that is true if the component is mounted and false if the component
 * is unmounted.
 * @returns A boolean value that is true if the component is mounted and false if it is not.
 */
export const useIsMounted = (): boolean => {
	const isMounted = useRef(false);

	useEffect(() => {
		isMounted.current = true;

		return () => {
			isMounted.current = false;
		};
	}, []);

	return isMounted.current;
};
