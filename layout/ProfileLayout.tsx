import {Header} from '@/components/Header';
import Head from 'next/head';
import React from 'react';

import styles from '@/styles/Profile.module.scss';

interface ProfileLayout {
	title: string;
}

export const ProfileLayouts: React.FC<React.PropsWithChildren<ProfileLayout>> = ({
	title,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>

			<main className={styles.wrapper}>
				<Header />
				<div className={styles.main}>
					<div className={styles.layout}>{children}</div>
				</div>
			</main>
		</>
	);
};
