import React from 'react';

import styles from '@/styles/Home.module.scss';
import {Sidebar} from '@/components/SideBar';

export const DashboardLayout: React.FC<React.PropsWithChildren<React.PropsWithChildren>> = ({
	children,
}) => {
	return (
		<main className={styles.dashboardContainer}>
			<Sidebar />
			<div className={styles.container}>{children}</div>
		</main>
	);
};
