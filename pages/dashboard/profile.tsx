import {GetServerSidePropsContext, NextPage} from 'next';
import {User} from '@/api/dto/user.dto';
import {ProfileLayouts} from '@/layout/ProfileLayout';
import {checkAuth} from '@/utils/checkAuth';
import * as Api from '@/api';
import Profile from '@/components/Profile';

interface Props {
	userData: User;
}

const DahsboardProfilePage: NextPage<Props> = ({userData}) => {
	return (
		<main>
			<Profile userData={userData} />
		</main>
	);
};

DahsboardProfilePage.getLayout = function (page: React.ReactNode) {
	return <ProfileLayouts title="Dashboard/Profile">{page}</ProfileLayouts>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const authProps = await checkAuth(ctx);

	if ('redirect' in authProps) {
		return authProps;
	}

	const userData = await Api.auth.getAuthUser();

	return {
		props: {userData},
	};
};

export default DahsboardProfilePage;
