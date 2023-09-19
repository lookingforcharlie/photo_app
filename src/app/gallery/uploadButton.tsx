'use client';

import { Upload } from 'lucide-react';
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { FC } from 'react';
import { Button } from '../../components/ui/button';

interface UploadButtonProps {}

const UploadButton: FC<UploadButtonProps> = ({}) => {
  return (
    <Button asChild>
      <div className='flex gap-2'>
        <Upload size={16} />
        <CldUploadButton uploadPreset='nfi6ljmm' />
      </div>
    </Button>
  );
};

export default UploadButton;
