import React, {FC, useState} from 'react';
import {FileCard} from '../FileCard';
import {FileItem} from '@/api/dto/files.dto';
import styles from './FileList.module.scss';
import {Dropdown, MenuProps} from 'antd';
import Selecto from 'react-selecto';

export type FileSelectType = 'select' | 'unselect';

interface FilelistProps {
	files: FileItem[];
	onFileSelect: (id: number, type: FileSelectType) => void;
	selectedIds: number[];
}

export const FileList: FC<FilelistProps> = ({files, onFileSelect, selectedIds}) => {
	// const [userFiles, setUserFiles] = useState(files);

	// const [hoveredFieleId, setHoveredFieleId] = useState<number | undefined>(undefined);

	// const onMouseMove = (id: number) => {
	// 	if (id !== hoveredFieleId) {
	// 		console.log(id, hoveredFieleId);
	// 		setHoveredFieleId(id);
	// 	}
	// };

	// const onMouseOut = () => {
	// 	setHoveredFieleId(undefined);
	// };

	// const items: MenuProps['items'] = [
	// 	{
	// 		label: `${hoveredFieleId}`,
	// 		key: '1',
	// 	},
	// 	{
	// 		label: '2nd menu item',
	// 		key: '2',
	// 	},
	// 	{
	// 		label: '3rd menu item',
	// 		key: '3',
	// 	},
	// ];
	return (
		// <Dropdown menu={{items}} trigger={['contextMenu']}>

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
				toggleContinueSelect={['shift']}
				toggleContinueSelectWithoutDeselect={'ctrl'}
				continueSelect={false}
				onSelect={e => {
					e.added.forEach(el => {
						el.classList.add('active');
						onFileSelect(Number(el.dataset['id']), 'select');
						// onFileSelect(+el?.getAttribute('data-id'), 'select');
					});
					e.removed.forEach(el => {
						el.classList.remove('active');
						onFileSelect(Number(el.dataset['id']), 'unselect');
						// onFileSelect(+el?.getAttribute('data-id'), 'unselect');
					});
				}}
			/>
		</div>
		// </Dropdown>
	);
};
