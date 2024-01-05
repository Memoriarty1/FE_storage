import axios from '@/core/axios';
import {FileItem} from './dto/files.dto';

type FileType = 'all' | 'photos' | 'bucket';

export const getAllFilesByType = async (type: FileType = 'all'): Promise<FileItem[]> => {
	const {data} = await axios.get(`/files?type=${type}`);

	return data;
};

export const removeByIds = async (ids: number[]): Promise<void> => {
	try {
		return await axios.delete(`/files?ids=${ids}`);
	} catch(error) {
		console.log(error)
	}
};

export const uploadFile = async (options: any): Promise<any> => {
	// functions + file from upload component fron antD
	const {onSuccess, onError, file, onProgress} = options;

	const formData = new FormData();
	formData.append('file', file);

	const config = {
		headers: {'Content-Type': 'multipart/form.data'},
		onProgress: (event: ProgressEvent) => {
			onProgress({percent: (event.loaded / event.total) * 100});
		},
	};

	try {
		const {data} = await axios.post('files', formData, config);

		onSuccess();

		return data;
	} catch (err) {
		onError({err});
		console.log({err});
	}
};
