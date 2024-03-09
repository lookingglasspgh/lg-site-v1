import React from 'react';
import {
  chakra,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import Markdown from 'react-markdown';
import PropTypes from 'prop-types';

import commonStyles from '@/styles/commonStyles';

const { commonWidths } = commonStyles;

const MarkdownContainer = chakra(Flex, {
  baseStyle: {
    width: '100%',
    flexDirection: 'column',
    margin: '0 auto',
    padding: { base: '3rem 1rem 4rem 1rem', md: '3rem 3rem 4rem 3rem', xl: '3rem 0 10rem 0' },
    maxWidth: commonWidths.maxSectionWidth,
    backdropFilter: 'blur(2px)',
  },
});

const StyledLi = chakra('li', {
  baseStyle: {
    position: 'relative',
    left: '1rem',
    fontSize: 'lg',
  },
});

const MarkdownPage = ({ markdownContent }) => {
  const renderH1 = (props) => <Heading as="h1" mb="2rem" {...props} />;
  const renderH2 = (props) => <Heading as="h2" m="1.5rem 0 1rem" fontSize="3xl" {...props} />;
  const renderLi = (props) => <StyledLi {...props} />;
  const renderP = (props) => <Text m="0.5rem 0" fontSize="lg" {...props} />;

  return (
    <MarkdownContainer>
      <Markdown
        components={{
          h1: renderH1,
          h2: renderH2,
          li: renderLi,
          p: renderP,
        }}
      >
        {markdownContent}
      </Markdown>
    </MarkdownContainer>
  );
};

MarkdownPage.propTypes = {
  markdownContent: PropTypes.string.isRequired,
};

export default MarkdownPage;
