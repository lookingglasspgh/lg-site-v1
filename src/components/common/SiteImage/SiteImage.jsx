import { chakra } from '@chakra-ui/react';
import Image from 'next/image';

const SiteImage = chakra(Image, {
  shouldForwardProp: (prop) => [
    'height',
    'width',
    'src',
    'alt',
    'priority',
    'style',
    'fill',
    'sizes',
    'onLoad',
  ].includes(prop),
});

export default SiteImage;
