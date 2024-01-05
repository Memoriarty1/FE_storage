import {GetServerSidePropsContext} from 'next';
import * as Api from '@/api';

import nookies from 'nookies';
import axios from '@/core/axios';

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
	const {_token} = nookies.get(ctx);

	axios.defaults.headers.Authorization = `Bearer ${_token}`;

	try {
		const a = await Api.auth.getAuthUser();

		return {
			props: {},
		};
	} catch (err) {
		console.log(err);
		return {
			redirect: {
				destination: '/dashboard/auth',
				permanent: false,
			},
		};
	}
};
