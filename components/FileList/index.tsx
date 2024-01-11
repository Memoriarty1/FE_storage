import React, {FC} from 'react';
import {FileCard} from '../FileCard';
import {FileItem} from '@/api/dto/files.dto';
import styles from './FileList.module.scss';
import Selecto from 'react-selecto';

export type FileSelectType = 'select' | 'unselect';

interface FilelistProps {
	files: FileItem[];
	onFileSelect: (id: number, type: FileSelectType) => void;
	selectedIds: number[];
}

export const FileList: FC<FilelistProps> = ({files, onFileSelect, selectedIds}) => {
	return (
		<div className={styles.root}>
			{files.map(file => (
				<div data-id={file.id} key={file.id} className="file">
					<FileCard
						originalName={file.originalName}
						filename={file.fileName}
						id={file.id}
						selectedIds={selectedIds}
						// onMouseMove={onMouseMove}
						// onMouseOut={onMouseOut}
					/>
				</div>
			))}
			<Selecto
				//@ts-ignore
				container=".files"
				selectableTargets={['.file']}
				selectByClick
				hitRate={10}
				selectFromInside
				toggleContinueSelect={['ctrl']}
				continueSelect={false}
				onSelect={e => {
					e.added.forEach(el => {
						el.classList.add('active');
						onFileSelect(Number(el.dataset['id']), 'select');
					});
					e.removed.forEach(el => {
						el.classList.remove('active');
						onFileSelect(Number(el.dataset['id']), 'unselect');
					});
				}}
			/>
		</div>
	);
};
