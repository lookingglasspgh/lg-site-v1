import React from 'react';
import { ChevronDown } from 'react-feather';
import {
  Link,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { colors } from '@/styles/theme';

const StyledChevron = styled(ChevronDown)`
  margin-top: 4px;
  margin-left: 2px;
  color: ${colors.black[500]};
`;

const LinkMenu = ({ listRoutes, title }) => (
  <Popover key={title}>
    <PopoverTrigger>
      <Text
        fontSize="lg"
        mr="1.5rem"
        display="flex"
        transition="all 0.2s"
        _hover={{ color: 'pink.500', cursor: 'pointer' }}
      >
        {title}
        <StyledChevron size={20} />
      </Text>
    </PopoverTrigger>
    <PopoverContent
      width="270px"
      bg="rgba(27,28,44, .9)"
      borderColor="black.400"
      color="ivory.500"
      padding="1rem"
      marginRight="3rem"
      boxShadow="xl"
      backdropFilter="blur(6px)"
      _focus={{ boxShadow: 'none' }}
    >
      <PopoverBody
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        { listRoutes.map((route) => (
          <Link
            as={NextLink}
            key={route.title}
            href={route.path}
            fontSize="lg"
            mr="1.5rem"
            mb="1rem"
            transition="all 0.2s"
            _last={{ mb: '0' }}
            _hover={{ color: 'pink.500' }}
          >
            {route.title}
          </Link>
        ))}
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

LinkMenu.propTypes = {
  listRoutes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      path: PropTypes.string,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default LinkMenu;
