import { useLayoutEffect, useState } from 'react';

const useIsMobile = (): boolean => {
	const [isMobile, setIsMobile] = useState(false);

	useLayoutEffect(() => {
		function updateSize() {
			setIsMobile(window.innerWidth < window.innerHeight);
		}

		window.addEventListener('resize', updateSize);

		return (): void => window.removeEventListener('resize', updateSize);
	}, []);

	return isMobile;
};

export default useIsMobile;
