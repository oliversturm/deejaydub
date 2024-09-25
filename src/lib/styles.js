export const bgColors = [
	'bg-red-500',
	'bg-green-500',
	'bg-blue-500',
	'bg-yellow-500',
	'bg-indigo-500',
	'bg-purple-500',
	'bg-pink-500',
	'bg-gray-500'
];

export const colors = [
	'text-red-500',
	'text-green-500',
	'text-blue-500',
	'text-yellow-500',
	'text-indigo-500',
	'text-purple-500',
	'text-pink-500',
	'text-gray-500'
];

export const standardColors = [
	'black',
	'blanchedalmond',
	'blue',
	'blueviolet',
	'brown',
	'burlywood',
	'cadetblue',
	'chartreuse',
	'chocolate',
	'coral',
	'cornflowerblue',
	'red',
	'crimson',
	'cyan',
	'darkblue',
	'darkcyan',
	'darkgoldenrod'
];

export const left = ['left-1', 'left-1/4', 'left-1/3', 'left-1/2', 'left-3/4'];
export const top = ['top-1', 'top-1/4', 'top-1/3', 'top-1/2', 'top-3/4'];

export const rotate = [
	'rotate-0',
	'rotate-3',
	'rotate-6',
	'rotate-12',
	'rotate-45',
	'-rotate-3',
	'-rotate-6',
	'-rotate-12',
	'-rotate-45'
];

export const scaleX = [
	'scale-x-75',
	'scale-x-100',
	'scale-x-125',
	'scale-x-150',
	'scale-x-[2.0]',
	'scale-x-[2.5]',
	'scale-x-[3.0]'
];
export const scaleY = [
	'scale-y-75',
	'scale-y-100',
	'scale-y-125',
	'scale-y-150',
	'scale-y-[2.0]',
	'scale-y-[2.5]',
	'scale-y-[3.0]'
];

export const skewX = [
	'skew-x-0',
	'skew-x-3',
	'skew-x-6',
	'skew-x-12',
	'-skew-x-3',
	'-skew-x-6',
	'-skew-x-12'
];

export const skewY = [
	'skew-y-0',
	'skew-y-3',
	'skew-y-6',
	'skew-y-12',
	'-skew-y-3',
	'-skew-y-6',
	'-skew-y-12'
];

export const random = (list) => list[Math.floor(Math.random() * list.length)];

export const randomColorCombo = () => {
	// Make sure not to use the same color indexes because the result will be
	// invisible.
	const indexColor = Math.floor(Math.random() * colors.length);
	const indexBgColor = Math.floor(Math.random() * bgColors.length);
	return indexColor === indexBgColor
		? randomColorCombo()
		: { fg: colors[indexColor], bg: bgColors[indexBgColor] };
};
