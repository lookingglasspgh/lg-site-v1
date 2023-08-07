import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { ExternalLink } from 'react-feather';
import PropTypes from 'prop-types';

import commonStyles from '@/styles/commonStyles';

const { gradients } = commonStyles;

const SupportTile = ({
  description,
  heading,
  icon,
  tileLink,
}) => {
  const Icon = () => icon;

  return (
    <Link
      href={tileLink}
      _hover={{ textDecoration: 'none' }}
      isExternal
      pointerEvents={tileLink ? 'auto' : 'none'}
    >
      <Flex
        background={gradients.black}
        direction="column"
        borderRadius="lg"
        padding="4rem 2rem 2rem 2rem"
        boxShadow="2xl"
      >
        <Container>
          <Box color="ivory.400" m="0 auto" width="fit-content" mb="2rem">
            <Icon />
          </Box>
          <Heading
            as="h3"
            variant="secondary"
            fontSize="2xl"
            mb="1.5rem"
            minHeight={{ base: 'auto', md: '4rem', lg: 'auto' }}
            textAlign={{ base: 'center', xl: 'left' }}
          >
            {heading}
          </Heading>
          <Text
            variant="secondary"
            fontSize={{ base: 'md', sm: 'lg' }}
            minHeight={{
              base: 'auto', md: '11.5rem', lg: '8rem',
            }}
            mb="2rem"
            lineHeight="1.7"
          >
            {description}
          </Text>
          <Box
            ml="auto"
            color="ivory.400"
            width="fit-content"
            minHeight="1.25rem"
          >
            { tileLink && (
              <ExternalLink size={20} />
            )}
          </Box>
        </Container>
      </Flex>
    </Link>
  );
};

SupportTile.propTypes = {
  description: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  icon: PropTypes.shape({}).isRequired,
  tileLink: PropTypes.string.isRequired,
};

export default SupportTile;
