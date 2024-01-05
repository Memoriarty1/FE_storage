import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';
import {StyleProvider} from '@ant-design/cssinjs';

// import '../public/antd.min.css'; // add this line
// import '../styles/globals.css';
import '@/components/FileList/ActiveCardStyle.css';
import '@/components/UploadButton/UploadButton.css';

interface Props extends AppProps {
	Component: AppProps['Component'] & {
		getLayout: (page: React.ReactElement) => React.ReactNode;
	};
	pageProps: any;
}

export default function App({Component, pageProps}: Props) {
	const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
	return getLayout(
		<StyleProvider hashPriority="high">
			<Component {...pageProps} />
		</StyleProvider>
	);
}
