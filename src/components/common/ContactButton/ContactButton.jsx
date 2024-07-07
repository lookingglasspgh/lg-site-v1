import React, { useState } from 'react';
import { Button, Tooltip } from '@chakra-ui/react';
import { Mail } from 'react-feather';

import common from '@/content/common';

const email = 'info@looking-glass.space';

const { tooltips } = common.footer;

const ContactButton = ({ ...restProps }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  const onButtonClick = () => {
    copyEmail();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  const tooltipLabel = isClicked ? tooltips.CONTACT_CLICK : tooltips.CONTACT_HOVER;

  return (
    <Tooltip
      label={tooltipLabel}
      placement="top"
      hasArrow
      isOpen={isClicked || isHovered}
      isClicked={isClicked}
    >
      <Button
        variant="ghost"
        onClick={onButtonClick}
        minWidth="unset"
        aria-label={common.accessibility.CONTACT_ALT}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
        {...restProps}
      >
        <Mail size={24} />
      </Button>
    </Tooltip>
  );
};

export default ContactButton;
