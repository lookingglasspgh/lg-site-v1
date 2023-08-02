import React, { useState } from 'react';
import {
  Button,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import { Mail } from 'react-feather';
import PropTypes from 'prop-types';

import common from '@/content/common';

const email = 'adrian@looking-glass.space';
const copiedEmailNotice = 'Copied Contact Email';

const ContactButton = (styleProps) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  const onButtonClick = () => {
    if (isTooltipOpen) setIsTooltipOpen(false);
    else {
      copyEmail();
      setIsTooltipOpen(true);
      setTimeout(() => setIsTooltipOpen(false), 2000);
    }
  };

  return (
    <Tooltip
      label={copiedEmailNotice}
      placement="top"
      isOpen={isTooltipOpen}
      hasArrow
      bg="pink.500"
      color="ivory.500"
    >
      <Button
        variant="outline"
        color="ivory.500"
        borderColor="ivory.500"
        onClick={onButtonClick}
        _hover={{ background: 'black.400' }}
        {...styleProps}
      >
        <Mail size={20} />
        <Text color="ivory.500" ml="0.5rem">{common.CONTACT}</Text>
      </Button>
    </Tooltip>
  );
};

ContactButton.propTypes = {
  styleProps: PropTypes.shape(),
};

ContactButton.defaultProps = {
  styleProps: {},
};

export default ContactButton;
