import React, {FC} from 'react';
import * as Api from '@/api';
import {useRouter} from 'next/router';
import {Button} from 'antd';
import {User} from '@/api/dto/user.dto';
import styles from './Profile.module.scss';

interface Profile {
	userData: User;
}

const Profile: FC<Profile> = ({userData}) => {
	const router = useRouter();

	const onLogOut = () => {
		Api.auth.logout();
		router.push('/');
	};
	return (
		<div className={styles.container}>
			<h1>My profile</h1>
			<p>
				ID: <b>{userData.id}</b>
			</p>
			<p>
				Fullname: <b>{userData.fullName}</b>
			</p>
			<p>
				E-mail: <b>{userData.email}</b>
			</p>
			<Button type="primary" danger onClick={onLogOut}>
				Exit
			</Button>
		</div>
	);
};

export default Profile;
