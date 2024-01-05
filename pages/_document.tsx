// import {createCache, StyleProvider} from '@ant-design/cssinjs';
// import type {DocumentContext} from 'next/document';
// import Document, {Head, Html, Main, NextScript} from 'next/document';

// import {doExtraStyle} from '../scripts/genAntdCss';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

const MyDocument = () => (
  <Html lang='en'>
    <Head />
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
      </>
    ),
  };
}

export default MyDocument;