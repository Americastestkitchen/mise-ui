import React from 'react';
import MadeForYouCarousel from './index';

export default {
  title: 'Components/Carousels/MadeForYouCarousel',
  component: MadeForYouCarousel,
};

export const EmptyState = () => <MadeForYouCarousel title='Made For you' subtitle='Smart collections that get more personalized as you go' />;

export const StandardCarousel = () => (
  <MadeForYouCarousel
    username="You"
    results={[
      {
        collection_type: 'Chicken',
        title: 'Your Chicken Inspired Monthly Mix.',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/43960-sfs-indian-butter-chicken-for-two-35-1.jpg',
        links: {
          self: '/api/v6/miso/user_to_attributes/Chicken',
        },
      },
      {
        collection_type: 'Cookbook Collection',
        title: 'Your Cookbook Collection Inspired Monthly Mix.',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/22783_sfs-french-onion-soup-31.jpg',
        links: {
          self: '/api/v6/miso/user_to_attributes/Cookbook Collection',
        },
      },
      {
        collection_type: 'Side Dishes',
        title: 'Your Side Dishes Inspired Monthly Mix.',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/40798_sfs-holiday-scalloped-potatoes-018.jpg',
        links: {
          self: '/api/v6/miso/user_to_attributes/Side Dishes',
        },
      },
      {
        collection_type: 'Vegetables',
        title: 'Your Vegetables Inspired Monthly Mix.',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/40148_buffalo-cauliflower.jpg',
        links: {
          self: '/api/v6/miso/user_to_attributes/Vegetables',
        },
      },
      {
        collection_type: 'Chicken',
        title: 'Your Chicken Inspired Monthly Mix.',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/43960-sfs-indian-butter-chicken-for-two-35-1.jpg',
        links: {
          self: '/api/v6/miso/user_to_attributes/Chicken',
        },
      },
      {
        collection_type: 'Cookbook Collection',
        title: 'Your Cookbook Collection Inspired Monthly Mix.',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/22783_sfs-french-onion-soup-31.jpg',
        links: {
          self: '/api/v6/miso/user_to_attributes/Cookbook Collection',
        },
      },
      {
        collection_type: 'Side Dishes',
        title: 'Your Side Dishes Inspired Monthly Mix.',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/40798_sfs-holiday-scalloped-potatoes-018.jpg',
        links: {
          self: '/api/v6/miso/user_to_attributes/Side Dishes',
        },
      },
      {
        collection_type: 'Vegetables',
        title: 'Your Vegetables Inspired Monthly Mix.',
        cloudinary_url:
          'https://res.cloudinary.com/hksqkdlah/image/upload/40148_buffalo-cauliflower.jpg',
        links: {
          self: '/api/v6/miso/user_to_attributes/Vegetables',
        },
      },
    ]}
  />
);
