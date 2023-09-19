'use client';

import { CldImage, CldUploadButton } from 'next-cloudinary';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../components/ui/button';

export type ResultType = {
  info: {
    public_id: string;
  };
  event: 'success' | 'error';
};

export default function Home() {
  const [image, setImage] = useState('bangbtiw0a74ipeisatc');

  const handleUpload = (result: ResultType) => {
    if (result.event === 'success') {
      console.log(result.info.public_id);
      setImage(result.info.public_id);
    }
  };
  return (
    <main className='min-h-screen flex flex-col items-center justify-center'>
      <CldUploadButton onUpload={handleUpload} uploadPreset='nfi6ljmm' />
      {image && (
        <CldImage
          width='600'
          height='400'
          src={image}
          // zoompan='loop'
          // get the public id for the image from cloudinary console
          sizes='100vw'
          alt='hello image'
        />
      )}
    </main>
  );
}
