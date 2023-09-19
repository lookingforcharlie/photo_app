'use client';

import { Upload } from 'lucide-react';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { Button } from '../../components/ui/button';
import { ResultType } from '../page';

interface UploadButtonProps {}

const UploadButton: FC<UploadButtonProps> = ({}) => {
  const router = useRouter();

  return (
    <Button asChild>
      <div className='flex gap-2'>
        {/* Every time uploads a image to cloudinary, force re-render on the page, so user can see the updates */}
        <CldUploadButton
          uploadPreset='nfi6ljmm'
          onUpload={() => {
            setTimeout(() => {
              console.log('refresh');
              router.refresh();
            }, 1500);
          }}
        >
          <div className='flex gap-2'>
            <Upload size={18} />
            Upload
          </div>
        </CldUploadButton>
      </div>
    </Button>
  );
};

export default UploadButton;
