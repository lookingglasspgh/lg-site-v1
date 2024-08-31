import React from 'react';
import { AlignLeft, ExternalLink } from 'react-feather';
import { Flex, Link, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import commonStyles from '@/styles/commonStyles';
import contributors from '@/content/contributors';
import SiteImage from '@/components/common/SiteImage/SiteImage';

import {
  ButtonText,
  CardButton,
  CardDetails,
  Container,
  ImageContainer,
} from './CollaboratorCard.styles';

const { gradients } = commonStyles;

const CollaboratorCard = ({ collaborator, onBioClick }) => (
  <Container background={gradients.black}>
    <ImageContainer>
      <SiteImage
        src={collaborator.headshotPath}
        alt={collaborator.headshotAlt}
        priority={!!collaborator?.priority}
        fill
        style={{ borderRadius: '4px' }}
        sizes="19.625rem"
      />
    </ImageContainer>
    <Flex direction="column">
      <CardDetails>
        <Text
          fontSize={{ base: 'md', sm: 'lg', xl: 'xl' }}
          variant="secondary"
          fontWeight="semibold"
          mb="0.25rem"
        >
          {collaborator.name}
        </Text>
        <Text
          variant="secondary"
          fontSize={{ base: 'sm', sm: 'md', xl: 'lg' }}
        >
          {collaborator.role}
        </Text>
      </CardDetails>
      <Flex
        width="100%"
        alignItems="center"
        gap="1rem"
      >
        <CardButton
          variant="outline"
          size={{ base: 'xs', sm: 'sm' }}
          onClick={() => onBioClick(collaborator.bio)}
        >
          <AlignLeft size={16} />
          <ButtonText>{contributors.BIO}</ButtonText>
        </CardButton>
        { collaborator.website && (
          <Link
            color="ivory.400"
            aria-label={`Link to ${collaborator.website}`}
            href={collaborator.website}
            isExternal
          >
            <CardButton
              variant="outline"
              size={{ base: 'xs', sm: 'sm' }}
            >
              <ExternalLink size={16} />
              <ButtonText>{contributors.SITE}</ButtonText>
            </CardButton>
          </Link>
        )}
      </Flex>
    </Flex>
  </Container>
);

CollaboratorCard.propTypes = {
  collaborator: PropTypes.shape({
    bio: PropTypes.shape({}),
    headshotAlt: PropTypes.string,
    headshotPath: PropTypes.string,
    name: PropTypes.string,
    priority: PropTypes.bool,
    role: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  onBioClick: PropTypes.func.isRequired,
};

export default CollaboratorCard;
