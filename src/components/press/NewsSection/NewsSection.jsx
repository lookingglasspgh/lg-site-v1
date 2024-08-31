import React from 'react';
import { Flex, Heading, SimpleGrid } from '@chakra-ui/react';

import commonStyles from '@/styles/commonStyles';
import press from '@/content/press';

import ArticleCard from './ArticleCard';

const { commonWidths } = commonStyles;
const { articles } = press.news;

const NewsSection = () => (
  <Flex
    id="section-container"
    direction="column"
    width="100%"
    m="0 auto"
    p={{ base: '3rem 1rem', md: '3rem', xl: '3rem 0rem' }}
    maxWidth={commonWidths.maxSectionWidth}
  >
    <Heading as="h1" mb="3rem">{press.news.HEADING}</Heading>
    <SimpleGrid
      gap={{
        base: '2rem', md: '1.5rem', lg: '1.25rem', xl: '2rem',
      }}
      columns={{ base: '1', md: '2', lg: '3' }}
    >
      { articles.map((article) => (
        <ArticleCard
          key={article.title}
          article={article}
        />
      ))}
    </SimpleGrid>
  </Flex>
);

export default NewsSection;
