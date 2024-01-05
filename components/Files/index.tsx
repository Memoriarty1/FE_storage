import {FileItem} from '@/api/dto/files.dto';
import React, {FC, useState} from 'react';
import {FileActions} from '../FileActions';
import {Empty, notification} from 'antd';
import {FileList, FileSelectType} from '@/components/FileList';

import * as Api from '@/api';
import router from 'next/router';
import {useRouter} from 'next/router';

interface FilesProps {
	items: FileItem[];
	withActions?: boolean;
}

export const Files: FC<FilesProps> = ({items, withActions}) => {
	const [files, setFiles] = useState(items || []);
	const [selectedIds, setSelectedIds] = useState<number[] | []>([]);

	const router = useRouter();
	const patharr = router.pathname.split('/');

	const onFileSelect = (id: number, type: 'select' | 'unselect') => {
		setSelectedIds(prev =>
			type === 'select' ? [...prev, id] : prev.filter((_id: number) => _id !== id)
		);
	};

	// const onFileSelection = (id: number, type: 'select' | 'unselect') => {};
	const onClickShare = () => {
		alert('Share');
	};

	const onClickRemove = () => {
		Api.files.removeByIds(selectedIds);
		// @ts-ignore
		setFiles(prev => prev.filter(file => !selectedIds.includes(file.id)));
		setSelectedIds([]);
	};

	// @ts-ignore
	const onUpload = async options => {
		// const currPath = router.asPath;
		// const parts = currPath.split('/')

		if (options.file.size > 1024 * 1024 * 5) {
			notification.error({
				message: 'Error',
				description: "File can't be upload if it more than 5Mg",
				duration: 2,
			});
			throw Error;
		} else {
			try {
				console.log(patharr[patharr.length - 1]);
				console.log(router);
				// console.log(new URL())
				const uploadResponse = await Api.files.uploadFile(options);
				if (uploadResponse) {
					const fileType = patharr[patharr.length - 1];
					const fetchedFiles = await Api.files.getAllFilesByType(
						// @ts-ignore
						patharr.length > 2 ? fileType : 'all'
					);
					fetchedFiles && setFiles(fetchedFiles);
				}
			} catch (error) {
				notification.error({
					message: 'Error',
					description: "Can't upload your files",
					duration: 2,
				});
			}
		}
	};

	return (
		<div>
			{files.length ? (
				<>
					{withActions && (
						<FileActions
							onClickRemove={onClickRemove}
							onClickShare={onClickShare}
							onUpload={onUpload}
							isActive={selectedIds.length > 0}
						/>
					)}
					<FileList files={files} onFileSelect={onFileSelect} selectedIds={selectedIds} />
				</>
			) : (
				<Empty className="empty-block" description="List of files is empty" />
			)}
		</div>
	);
};
