import cloudinary from 'cloudinary';
import { CldImage } from 'next-cloudinary';
import { FC } from 'react';
import Gallery from './Gallery';
import UploadButton from './uploadButton';

interface GalleryPageProps {}

export type SearchResult = {
  public_id: string;
};

const GalleryPage: FC<GalleryPageProps> = async ({}) => {
  // TODO: fetch all the images from cloudinary when open this page
  const results = (await cloudinary.v2.search
    .expression('resource_type:image')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  return (
    <section className='flex flex-col space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl font-semibold '>Gallery</h1>
        <UploadButton />
      </div>
      <div className='grid grid-cols-4 gap-4'>
        {results.resources.map((result) => (
          <Gallery result={result} key={result.public_id} />
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
