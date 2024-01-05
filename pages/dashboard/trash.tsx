import {GetServerSidePropsContext, NextPage} from 'next';
import {checkAuth} from '@/utils/checkAuth';
import {Layout} from '@/layout/Layout';
import * as Api from '@/api';
import {FileItem} from '@/api/dto/files.dto';
import {FileList} from '@/components/FileList';
import {DashboardLayout} from '@/layout/DashboardLayout';
import {Files} from '@/components/Files';

interface DashboardBucketProps {
	items: FileItem[];
}

const DashboardBucket: NextPage<DashboardBucketProps> = ({items}) => {
	return (
		<DashboardLayout>
			<Files items={items} />
		</DashboardLayout>
	);
};

DashboardBucket.getLayout = function (page: React.ReactNode) {
	return <Layout title="Dashboard/Bucket">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
	const authProps = await checkAuth(ctx);

	if ('redirect' in authProps) {
		return authProps;
	}

	try {
		const items = await Api.files.getAllFilesByType('bucket');

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

export default DashboardBucket;
