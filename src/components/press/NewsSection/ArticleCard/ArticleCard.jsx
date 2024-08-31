import React from 'react';
import { ExternalLink } from 'react-feather';
import { Flex, Link, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import commonStyles from '@/styles/commonStyles';
import press from '@/content/press';

const { gradients } = commonStyles;

const ArticleCard = ({ article }) => (
  <Link
    aria-label={`${press.news.LINK_ALT} ${article.title}`}
    href={article.url}
    isExternal
  >
    <Flex
      background={gradients.black}
      direction="column"
      padding="2rem"
      borderRadius="lg"
      boxShadow="xl"
      cursor="pointer"
    >
      <Flex direction="column">
        <Flex direction="column" mb="0.5rem">
          <Text
            variant="secondary"
            fontSize={{ base: 'sm', xl: 'md' }}
            mb="1.25rem"
          >
            {article.date}
          </Text>
          <Text
            fontSize={{ base: 'lg', xl: 'xl' }}
            variant="secondary"
            fontWeight="semibold"
            minHeight={{ base: 'unset', md: '81px' }}
            mb={{ base: '1rem', md: '' }}
          >
            {article.title}
          </Text>
          <Flex
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              variant="secondary"
              fontSize={{ base: 'md', xl: 'lg' }}
            >
              {article.publication}
            </Text>
            <Flex color="ivory.600">
              <ExternalLink size={20} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </Link>
);

ArticleCard.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string,
    publication: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default ArticleCard;
