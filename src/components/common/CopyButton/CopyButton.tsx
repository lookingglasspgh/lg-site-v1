import React, { useState } from 'react';
import { Tooltip } from '@chakra-ui/react';

interface Props {
  children: JSX.Element;
  copyTooltip: string;
  copyValue: string;
}

const CopyButton = ({ children, copyValue, copyTooltip }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(copyValue);
  };

  const onButtonClick = () => {
    copyToClipboard();
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  return (
    <Tooltip label={copyTooltip} placement="top" hasArrow isOpen={isClicked}>
      <div onClick={onButtonClick} style={{ width: 'fit-content' }}>
        {children}
      </div>
    </Tooltip>
  );
};

export default CopyButton;
