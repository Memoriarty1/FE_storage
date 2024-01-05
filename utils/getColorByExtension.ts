const extantionColor = {
	pdf: 'red',
	xls: 'green',
	doc: 'blue',
	// txt: 'black',
	png: 'orange',
	jpg: 'orange',
	jpeg: 'orange',
	zip: 'violet',
	mp3: 'indigo',
	mp4: 'indigo',
	gif: 'lightblue',
};

export type Extension = keyof typeof extantionColor;
export type Color = (typeof extantionColor)[Extension];

export const getColorByExtention = (extension: string): string => extantionColor[extension];
