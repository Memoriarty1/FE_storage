import React, {FC} from 'react';
import styles from './FileCard.module.scss';
import {getExtensionFromFileName} from '@/utils/getExtensionFromFileName';
import {isImage} from '@/utils/isImage';
import {getColorByExtention} from '@/utils/getColorByExtension';
import Image from 'next/image';
import {FileTextOutlined} from '@ant-design/icons';

interface FileCardProps {
	originalName: string;
	filename: string;
	id: number;
	selectedIds: number[];
}

export const FileCard: FC<FileCardProps> = ({
	originalName,
	filename,
}) => {
	const extension = getExtensionFromFileName(filename);
	const imageUrl =
		extension && isImage(extension) ? `http://localhost:7777/uploads/${filename}` : '';

	const myLoader = () => {
		return `http://localhost:7777/uploads/${filename}`;
	};

	const color = getColorByExtention(extension);

	const classColor = styles[color];

	return (
		<div
			className={styles.root}
		>
			<div className={styles.icon}>
				<i className={classColor}>{extension}</i>

				{isImage(extension) ? (
					<Image loader={myLoader} alt={filename} src={imageUrl} width={64} height={64} />
				) : (
					<FileTextOutlined />
				)}
			</div>
			<div className={styles.originalName}>{originalName}</div>
		</div>
	);
};
