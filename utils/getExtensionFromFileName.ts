import {Extension} from './getColorByExtension';

export const getExtensionFromFileName = (fileName: string) => {
	let splitedString = fileName.split('.');
	return splitedString[splitedString?.length - 1] as Extension;
};
