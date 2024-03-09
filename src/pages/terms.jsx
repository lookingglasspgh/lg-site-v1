import React from 'react';

import Layout from '@/components/common/Layout';
import MarkdownPage from '@/components/common/MarkdownPage';
import RouteMetadata from '@/constants/RouteMetadata';
import terms from '@/public/policies/terms';

const TermsPage = () => (
  <Layout pageMetadata={RouteMetadata.terms}>
    <MarkdownPage markdownContent={terms} />
  </Layout>
);

export default TermsPage;
