import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { RouteList } from '@/constants/RouteList';

const SoundscapePage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(RouteList.HOME);
  }, []);

  return (
    <Box>
      Soundscape
    </Box>
  );
};

export default SoundscapePage;
