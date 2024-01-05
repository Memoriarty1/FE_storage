import {GetServerSidePropsContext, NextPage} from 'next';
import {checkAuth} from '@/utils/checkAuth';
import {Layout} from '@/layout/Layout';
import * as Api from '@/api';
import {FileItem} from '@/api/dto/files.dto';
import {FileList} from '@/components/FileList';
import {DashboardLayout} from '@/layout/DashboardLayout';
import {FileActions} from '@/components/FileActions';
import {Files} from '@/components/Files';

interface DashboardPhotosProps {
	items: FileItem[];
}

const DashboardPhotos: NextPage<DashboardPhotosProps> = ({items}) => {
	return (
		<DashboardLayout>
			<Files items={items} withActions />
		</DashboardLayout>
	);
};

DashboardPhotos.getLayout = function (page: React.ReactNode) {
	return <Layout title="Dashboard/Photos">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const authProps = await checkAuth(ctx);

	if ('redirect' in authProps) {
		return authProps;
	}

	try {
		const items = await Api.files.getAllFilesByType('photos');

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

export default DashboardPhotos;
