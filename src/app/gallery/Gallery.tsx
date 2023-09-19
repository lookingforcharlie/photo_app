'use client';

import { CldImage } from 'next-cloudinary';
import { FC } from 'react';
import type { SearchResult } from './page';

interface GalleryProps {
  result: SearchResult;
}

const Gallery: FC<GalleryProps> = ({ result, ...props }) => {
  return (
    <CldImage
      key={result.public_id}
      width='600'
      height='400'
      src={result.public_id}
      // get the public id for the image from cloudinary console
      sizes='100vw'
      alt='hello image'
      {...props}
    />
  );
};

export default Gallery;
