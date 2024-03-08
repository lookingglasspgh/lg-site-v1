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
      borderColor: isFooterButton ? '' : 'ivory.400',
      color: isFooterButton ? 'black.300' : 'ivory.400',
      hoverBackground: isFooterButton ? '' : 'black.400',
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
      bg="pink.600"
      color="ivory.400"
    >
      <Button
        variant={isFooterButton ? 'ghost' : 'outline'}
        color={getButtonStyles().color}
        borderColor={getButtonStyles().borderColor}
        onClick={onButtonClick}
        _hover={{ background: getButtonStyles().hoverBackground }}
        minWidth="unset"
        alt={common.footer.CONTACT_ALT}
        {...restProps}
      >
        <Mail size={24} />
        { !isFooterButton && (
        <Text
          color={getButtonStyles().color}
          ml="0.5rem"
        >
          {common.CONTACT}
        </Text>
        )}
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
