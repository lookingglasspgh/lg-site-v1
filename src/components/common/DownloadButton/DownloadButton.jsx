import React from 'react';
import { Button, Text, useDisclosure } from '@chakra-ui/react';
import { Download } from 'react-feather';
import PropTypes from 'prop-types';

import common from '@/content/common';
import DownloadModal from '@/components/common/DownloadModal';

const DownloadButton = ({ isNavBarButton, ...restProps }) => {
  const {
    isOpen: isDownloadModalOpen,
    onOpen: onDownloadModelOpen,
    onClose: onDownloadModalClose,
  } = useDisclosure({ id: 'downloadModal' });

  return (
    <>
      { isNavBarButton ? (
        <Button
          size="sm"
          onClick={onDownloadModelOpen}
          {...restProps}
        >
          <Text variant="secondary">
            {common.DOWNLOAD_NAV}
          </Text>
        </Button>
      ) : (
        <Button
          size={{ base: 'md', lg: 'md' }}
          onClick={onDownloadModelOpen}
          {...restProps}
        >
          <Download size={20} />
          <Text ml="0.5rem" variant="secondary">
            {common.DOWNLOAD}
          </Text>
        </Button>
      )}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={onDownloadModalClose}
      />
    </>
  );
};

DownloadButton.propTypes = {
  isNavBarButton: PropTypes.bool,
};

DownloadButton.defaultProps = {
  isNavBarButton: false,
};

export default DownloadButton;
