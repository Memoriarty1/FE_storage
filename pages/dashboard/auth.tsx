import React, {useMemo} from 'react';
import {NextPage} from 'next';
import Head from 'next/head';
import LoginForm from '@/components/auth/LoginForm';
import styles from '@/styles/Auth.module.css';
import {Tabs} from 'antd';
import RegistrationForm from '@/components/auth/RegistrationForm';

const AuthPage: NextPage = () => {
	const dashboardTabs = useMemo(
		() => [
			{
				label: 'Sing in',
				key: '1',
				children: <LoginForm />,
			},
			{
				label: 'Sign up',
				key: '2',
				children: <RegistrationForm />,
			},
		],
		[]
	);

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<main className={styles.main}>
				<Tabs items={dashboardTabs} />
			</main>
		</>
	);
};

export default AuthPage;
