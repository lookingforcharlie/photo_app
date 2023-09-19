'use client';

import { Upload } from 'lucide-react';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { FC } from 'react';
import { Button } from '../../components/ui/button';

interface GalleryPageProps {}

const GalleryPage: FC<GalleryPageProps> = ({}) => {
  return (
    <section className=''>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl font-semibold '>Gallery</h1>
        <Button asChild>
          <div className='flex gap-2'>
            <Upload size={16} />
            <CldUploadButton uploadPreset='nfi6ljmm' />
          </div>
        </Button>
      </div>
    </section>
  );
};

export default GalleryPage;
