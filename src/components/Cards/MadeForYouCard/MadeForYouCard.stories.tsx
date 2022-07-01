import React from 'react';
import MadeForYouCard from './index';

export default {
  title: 'Components/Cards/MadeForYouCard',
  component: MadeForYouCard,
};

export const Standard = () => (
  <MadeForYouCard
    cloudinary_url="https://res.cloudinary.com/hksqkdlah/image/upload/43960-sfs-indian-butter-chicken-for-two-35-1.jpg"
    collection_type="Chicken"
  />
);
