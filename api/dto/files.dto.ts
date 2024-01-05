import {User} from './user.dto';

export interface FileItem {
	fileName: string;
	originalName: string;
	size: number;
	mimeType: string;
	user: User;
	deleteAt: string | null;
	id: number;
}
