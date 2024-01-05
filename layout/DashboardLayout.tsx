import React, {useMemo} from 'react';

import styles from '@/styles/Home.module.scss';
import {FileOutlined, FileImageOutlined, DeleteOutlined} from '@ant-design/icons';
import {useRouter} from 'next/router';
import {UploadButton} from '@/components/UploadButton';
import {Menu} from 'antd';
import {Sidebar} from '@/components/SideBar';

export const DashboardLayout: React.FC<React.PropsWithChildren<React.PropsWithChildren>> = ({
	children,
}) => {
	const router = useRouter();
	const selectedMenu = router.pathname;
	console.log(selectedMenu);
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
		<main className={styles.dashboardContainer}>
			<Sidebar />
			<div className={styles.container}>{children}</div>
		</main>
	);
};
