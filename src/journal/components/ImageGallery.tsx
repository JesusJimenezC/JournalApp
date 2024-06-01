import { ImageList, ImageListItem } from '@mui/material';
import type { ReactElement } from 'react';
import { memo } from 'react';

export const ImageGallery = memo(
  ({ images = [] }: { images: string[] }): ReactElement => (
    <ImageList cols={4} rowHeight={164} sx={{ height: 500, width: '100%' }}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            alt="Note Image"
            loading="lazy"
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          />
        </ImageListItem>
      ))}
    </ImageList>
  ),
);

ImageGallery.displayName = 'ImageGallery';
