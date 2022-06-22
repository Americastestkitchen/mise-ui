import React from 'react';
import MadeForYouCarousel from './index';

export default {
  title: 'Components/Carousels/MadeForYouCarousel',
  component: MadeForYouCarousel,
};

export const EmptyState = () => <MadeForYouCarousel title="Made For you" subtitle="Smart collections that get more personalized as you go" />;

export const StandardCarousel = () => (
  <MadeForYouCarousel
    title="Made For you"
    subtitle="Smart collections that get more personalized as you go"
    results={[
      {
        collection_type: 'Chicken',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/43960-sfs-indian-butter-chicken-for-two-35-1.jpg',
        url: '#',
      },
      {
        collection_type: 'Cookbook Collection',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/22783_sfs-french-onion-soup-31.jpg',
        url: '#',
      },
      {
        collection_type: 'Side Dishes',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/40798_sfs-holiday-scalloped-potatoes-018.jpg',
        url: '#',
      },
      {
        collection_type: 'Vegetables',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/40148_buffalo-cauliflower.jpg',
        url: '#',
      },
      {
        collection_type: 'Chicken',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/43960-sfs-indian-butter-chicken-for-two-35-1.jpg',
        url: '#',
      },
      {
        collection_type: 'Cookbook Collection',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/22783_sfs-french-onion-soup-31.jpg',
        url: '#',
      },
      {
        collection_type: 'Side Dishes',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/40798_sfs-holiday-scalloped-potatoes-018.jpg',
        url: '#',
      },
      {
        collection_type: 'Vegetables',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/40148_buffalo-cauliflower.jpg',
        url: '#',
      },
    ]}
  />
);
