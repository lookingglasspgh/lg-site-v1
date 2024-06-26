import React from 'react';

import Layout from '@/components/common/Layout';
import MarkdownPage from '@/components/common/MarkdownPage';
import RouteMetadata from '@/constants/RouteMetadata';

const support = `
# App Support

Thanks so much for downloading Looking Glass!

If you're experiencing any issues using the app or would just like to share your experience, please reach out!

You can contact us via email at **feedback@looking-glass.space**. We'll do our best to respond as soon as possible.
`;

const AppSupportPage = () => (
  <Layout pageMetadata={RouteMetadata.appSupport}>
    <MarkdownPage markdownContent={support} />
  </Layout>
);

export default AppSupportPage;
