import React from 'react';
import { ExternalLink } from 'react-feather';
import {
  chakra,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

import press from '@/content/press';

const Card = chakra(Flex, {
  baseStyle: {
    backgroundColor: 'ivory.600',
    border: '1px solid',
    borderRadius: 'lg',
    borderColor: 'ivory.900',
    boxShadow: 'xl',
    cursor: 'pointer',
    flexDirection: 'column',
    padding: '1.5rem',
    textDecoration: 'none',
    transition: 'all 300ms',
    _hover: {
      backgroundColor: 'ivory.500',
    },
  },
});

const ArticleCard = ({ article }) => (
  <Link
    aria-label={`${press.news.LINK_ALT} ${article.title}`}
    href={article.url}
    isExternal
    _hover={{ textDecoration: 'none' }}
  >
    <Card>
      <Flex direction="column">
        <Flex direction="column" mb="0.5rem">
          <Text
            fontSize={{ base: 'sm', xl: 'md' }}
            mb="1.25rem"
          >
            {article.date}
          </Text>
          <Text
            fontSize={{ base: 'lg', xl: 'xl' }}
            fontWeight="semibold"
            minHeight={{
              base: 'unset',
              md: '81px',
              lg: '108px',
              xl: '90px',
            }}
            mb={{ base: '1rem', md: '' }}
          >
            {article.title}
          </Text>
          <Flex
            alignItems="center"
            justifyContent="space-between"
          >
            <Text
              fontSize={{ base: 'md', xl: 'lg' }}
            >
              {article.publication}
            </Text>
            <Flex color="black.300">
              <ExternalLink size={20} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Card>
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
