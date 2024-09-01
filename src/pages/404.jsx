import { useEffect } from 'react';

import { RouteList } from '@/constants/RouteList';

const Custom404 = () => {
  useEffect(() => {
    window.location.replace(RouteList.HOME);
  }, []);

  return null;
};

export default Custom404;
