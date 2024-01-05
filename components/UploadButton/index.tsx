import React, {useState} from 'react';
import {Button, Upload, UploadFile, notification} from 'antd';
import {CloudUploadOutlined} from '@ant-design/icons';

interface UploadButton {
	onUpload: VoidFunction;
}

export const UploadButton: React.FC<UploadButton> = ({onUpload}) => {
	const [fileList, setFileList] = useState<UploadFile[]>([]);

	return (
		<Upload
			showUploadList={false}
			customRequest={onUpload}
			fileList={fileList}
			onChange={({fileList}) => setFileList(fileList)}
		>
			<Button type="primary" icon={<CloudUploadOutlined />} size="large" block>
				Upload Files
			</Button>
		</Upload>
	);
};
