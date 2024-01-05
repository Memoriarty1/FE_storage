export const debounce = (callback: Function, delay: number) => {
	let timer: string | number | NodeJS.Timeout | null | undefined = null;

	return (...args: any) => {
		if (timer) {
			clearInterval(timer);
		}

		timer = setTimeout(() => {
			callback(...args);
		}, delay);
	};
};
