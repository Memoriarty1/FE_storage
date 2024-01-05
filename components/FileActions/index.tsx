import {Button, Popconfirm} from 'antd';
import React, {FC} from 'react';
import styles from './FileActions.module.scss';
import {UploadButton} from '../UploadButton';

interface FileActionsProps {
	onClickRemove: VoidFunction;
	onClickShare: VoidFunction;
	onUpload: VoidFunction;
	isActive: boolean;
}

export const FileActions: FC<FileActionsProps> = ({
	onUpload,
	onClickRemove,
	onClickShare,
	isActive,
}) => {
	return (
		<div className={styles.root}>
			<UploadButton onUpload={onUpload} />
			{/* <Button onClick={onClickShare} disabled={!isActive}>
				Share
			</Button> */}
			<Popconfirm
				title="Delete file?"
				description="Your files will be in the bucket after delete"
				okText="Yes"
				cancelText="No"
				disabled={!isActive}
				onConfirm={onClickRemove}
			>
				<Button disabled={!isActive} type="primary" danger style={{height: 'auto'}}>
					Delete
				</Button>
			</Popconfirm>
		</div>
	);
};
