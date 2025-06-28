import React, { useState } from 'react';
import { Text, Tooltip } from '@chakra-ui/react';
import { Mail } from 'react-feather';

import common from '@/content/common';

import { FooterButton } from '../Footer/Footer.styles';

const email = 'info@looking-glass.space';

const { footer } = common;

const ContactButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  const onButtonClick = () => {
    copyEmail();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <Tooltip
      label={footer.CONTACT_CLICK}
      placement="top"
      hasArrow
      isOpen={isClicked}
      isClicked={isClicked}
    >
      <FooterButton
        variant="ghost"
        size="sm"
        onClick={onButtonClick}
      >
        <Mail size={20} />
        <Text display={{ base: 'none', md: 'block' }}>{footer.CONTACT}</Text>
      </FooterButton>
    </Tooltip>
  );
};

export default ContactButton;
