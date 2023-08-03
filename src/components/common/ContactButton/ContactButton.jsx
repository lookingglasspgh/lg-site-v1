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

const ContactButton = ({ isFooterButton, ...restProps }) => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  const getButtonStyles = () => (
    {
      borderColor: isFooterButton ? 'black.500' : 'ivory.500',
      color: isFooterButton ? 'black.500' : 'ivory.500',
      hoverBackground: isFooterButton ? 'ivory.600' : 'black.400',
    }
  );

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
        color={getButtonStyles().color}
        borderColor={getButtonStyles().borderColor}
        onClick={onButtonClick}
        _hover={{ background: getButtonStyles().hoverBackground }}
        {...restProps}
      >
        <Mail size={20} />
        <Text
          color={getButtonStyles().color}
          ml="0.5rem"
        >
          {common.CONTACT}
        </Text>
      </Button>
    </Tooltip>
  );
};

ContactButton.propTypes = {
  isFooterButton: PropTypes.bool,
};

ContactButton.defaultProps = {
  isFooterButton: false,
};

export default ContactButton;
