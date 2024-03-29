import {GetServerSidePropsContext, NextPage} from 'next';
import {checkAuth} from '@/utils/checkAuth';
import {Layout} from '@/layout/Layout';
import * as Api from '@/api';
import {FileItem} from '@/api/dto/files.dto';
import {DashboardLayout} from '@/layout/DashboardLayout';
import {Files} from '@/components/Files';


interface DashboardPageProps {
	items: FileItem[];
}

const DashboardPage: NextPage<DashboardPageProps> = ({items}) => {
	return (
		<DashboardLayout>
			<Files items={items} withActions />
		</DashboardLayout>
	);
};

//@ts-ignore
DashboardPage.getLayout = function (page: React.ReactNode) {
	return <Layout title="Dashboard/Main">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	console.log('ssrprops index');
	const authProps = await checkAuth(ctx);

	if ('redirect' in authProps) {
		return authProps;
	}

	try {
		const items = await Api.files.getAllFilesByType();

		return {
			props: {items},
		};
	} catch (err) {
		console.log(err);
		return {
			props: {items: []},
		};
	}
};

export default DashboardPage;
