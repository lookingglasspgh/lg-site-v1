import React from 'react';

import Layout from '@/components/common/Layout';
import MarkdownPage from '@/components/common/MarkdownPage';
import RouteMetadata from '@/constants/RouteMetadata';
import privacy from '@/public/policies/privacy';

const PrivacyPage = () => (
  <Layout pageMetadata={RouteMetadata.privacy}>
    <MarkdownPage markdownContent={privacy} />
  </Layout>
);

export default PrivacyPage;
