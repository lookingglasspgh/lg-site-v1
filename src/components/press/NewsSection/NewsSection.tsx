import React, { useEffect, useState } from 'react';
import { Button, Flex, Heading, SimpleGrid } from '@chakra-ui/react';
import { ArrowLeft, ArrowRight } from 'react-feather';

import commonStyles from '@/styles/commonStyles';
import press, { Article } from '@/content/press';

import ArticleCard from './ArticleCard';

const { commonWidths } = commonStyles;
const { articles } = press.news;

const maxArticles = 6;

const NewsSection = () => {
  const [currentArticles, setCurrentArticles] = useState<Article[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(0);
  const totalArticles = articles.length;

  useEffect(() => {
    const endingIndex = pageIndex + maxArticles;
    setCurrentArticles(articles.slice(pageIndex, endingIndex));
  }, [pageIndex, totalArticles]);

  const pageBack = () => setPageIndex(pageIndex - maxArticles);
  const pageForward = () => setPageIndex(pageIndex + maxArticles);

  const isPageForwardDisabled: () => boolean = () => {
    const endingIndex = pageIndex + maxArticles;
    if (articles[endingIndex]) return false;
    return true;
  };
  const isPageBackDisabled: () => boolean = () => {
    const startingIndex = pageIndex - maxArticles;
    if (articles[startingIndex]) return false;
    return true;
  };

  return (
    <Flex
      id="section-container"
      direction="column"
      width="100%"
      m="0 auto"
      p={{ base: '3rem 1rem', md: '3rem', xl: '3rem 0rem' }}
      maxWidth={commonWidths.maxSectionWidth}
    >
      <Heading as="h1" mb="3rem">
        {press.news.HEADING}
      </Heading>
      <SimpleGrid
        gap={{
          base: '2rem',
          md: '1.5rem',
          lg: '2rem',
        }}
        columns={[1, 1, 2, 3]}
      >
        {currentArticles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </SimpleGrid>
      <Flex mt="1.5rem" ml="auto" gap="1rem" alignItems="center">
        <Button
          variant="ghost"
          isDisabled={isPageBackDisabled()}
          onClick={pageBack}
          px="0"
        >
          <ArrowLeft />
        </Button>
        <Button
          variant="ghost"
          isDisabled={isPageForwardDisabled()}
          onClick={pageForward}
          px="0"
        >
          <ArrowRight />
        </Button>
      </Flex>
    </Flex>
  );
};

export default NewsSection;
