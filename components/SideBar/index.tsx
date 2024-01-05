import React, {FC, useMemo} from 'react';
import styles from './Sidebar.module.scss';
import {useRouter} from 'next/router';
import {FileOutlined, FileImageOutlined, DeleteOutlined} from '@ant-design/icons';
import {Menu} from 'antd';

export const Sidebar: FC = () => {
	const router = useRouter();
	const selectedMenu = router.pathname;
	const menuOptitions = useMemo(
		() => [
			{
				key: '/dashboard',
				icon: <FileOutlined />,
				label: 'Files',
				onClick: () => router.push('/dashboard'),
			},
			{
				key: '/dashboard/photos',
				icon: <FileImageOutlined />,
				label: 'Photo',
				onClick: () => router.push('/dashboard/photos'),
			},
			{
				key: '/dashboard/trash',
				icon: <DeleteOutlined />,
				label: 'Bucket',
				onClick: () => router.push('/dashboard/trash'),
			},
		],
		[]
	);

	return (
		<div className={styles.sidebar}>
			<Menu
				className={styles.menu}
				mode="inline"
				selectedKeys={[selectedMenu]}
				items={menuOptitions}
			/>
		</div>
	);
};
