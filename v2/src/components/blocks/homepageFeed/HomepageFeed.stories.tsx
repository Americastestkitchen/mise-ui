import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import HomepageFeed from './HomepageFeed';

export default {
  title: 'Components/Blocks/HomepageFeed',
  component: HomepageFeed,
} as ComponentMeta<typeof HomepageFeed>;

const Template: ComponentStory<typeof HomepageFeed> = args => <HomepageFeed {...args} />;

export const DefaultFeed: ComponentStory<typeof HomepageFeed> = Template.bind({});
DefaultFeed.args = {
  feed: [
    {
      documentType: 'article',
      card: {
        author: [
          {
            id: 156,
            firstName: 'Kevin',
            lastName: 'Pang',
            image:
            {
              altText: '',
              cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
            },
            inactive: false,
          },
        ],
        body: "Spatchcock a bird and slide it under the broiler. While it cooks to juicy, crispy-skinned perfection, use our novel method to whip up a luscious, savory gravy.",
        id: 1234,
        isFavorited: false,
        links: [
          {
            url: `/recipes/13545-broiled-chicken-with-gravy`, 
            title: "Start Cooking"
          },
        ],
        image: {
          altText: '',
          cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Broiled_Chicken_with_Gravy_379_rx4dzb.jpg'
        },
        title: "Broiled Chicken with Gravy"
      }
    },
    {
      documentType: 'recipe',
      card: {
        author: [
          {
            id: 156,
            firstName: 'Kevin',
            lastName: 'Pang',
            image:
            {
              altText: '',
              cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
            },
            inactive: false,
          },
        ],
        body: "Spatchcock a bird and slide it under the broiler. While it cooks to juicy, crispy-skinned perfection, use our novel method to whip up a luscious, savory gravy.",
        id: 1234,
        isFavorited: false,
        links: [
          {
            url: `/recipes/13545-broiled-chicken-with-gravy`, 
            title: "Start Cooking"
          },
        ],
        image: {
          altText: '',
          cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Broiled_Chicken_with_Gravy_379_rx4dzb.jpg'
        },
        title: "Broiled Chicken with Gravy"
      }
    },
    {
      documentType: 'article',
      card: {
        author: [
          {
            id: 156,
            firstName: 'Kevin',
            lastName: 'Pang',
            image:
            {
              altText: '',
              cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
            },
            inactive: false,
          },
        ],
        body: "Spatchcock a bird and slide it under the broiler. While it cooks to juicy, crispy-skinned perfection, use our novel method to whip up a luscious, savory gravy.",
        id: 1234,
        isFavorited: false,
        links: [
          {
            url: `/recipes/13545-broiled-chicken-with-gravy`, 
            title: "Start Cooking"
          },
        ],
        image: {
          altText: '',
          cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Broiled_Chicken_with_Gravy_379_rx4dzb.jpg'
        },
        title: "Broiled Chicken with Gravy"
      }
    },
    {
      documentType: 'recipe',
      card: {
        author: [
          {
            id: 156,
            firstName: 'Kevin',
            lastName: 'Pang',
            image:
            {
              altText: '',
              cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
            },
            inactive: false,
          },
        ],
        body: "Spatchcock a bird and slide it under the broiler. While it cooks to juicy, crispy-skinned perfection, use our novel method to whip up a luscious, savory gravy.",
        id: 1234,
        isFavorited: false,
        links: [
          {
            url: `/recipes/13545-broiled-chicken-with-gravy`, 
            title: "Start Cooking"
          },
        ],
        image: {
          altText: '',
          cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Broiled_Chicken_with_Gravy_379_rx4dzb.jpg'
        },
        title: "Broiled Chicken with Gravy"
      }
    },
    {
      documentType: 'howTo',
      card: {
        author: [
          {
            id: 156,
            firstName: 'Kevin',
            lastName: 'Pang',
            image:
            {
              altText: '',
              cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
            },
            inactive: false,
          },
        ],
        body: "Spatchcock a bird and slide it under the broiler. While it cooks to juicy, crispy-skinned perfection, use our novel method to whip up a luscious, savory gravy.",
        id: 1234,
        isFavorited: false,
        links: [
          {
            url: `/recipes/13545-broiled-chicken-with-gravy`, 
            title: "Start Cooking"
          },
        ],
        image: {
          altText: '',
          cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Broiled_Chicken_with_Gravy_379_rx4dzb.jpg'
        },
        title: "Broiled Chicken with Gravy"
      }
    },
    {
      documentType: 'reviews',
      card: {
        author: [
          {
            id: 156,
            firstName: 'Kevin',
            lastName: 'Pang',
            image:
            {
              altText: '',
              cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
            },
            inactive: false,
          },
        ],
        body: "Spatchcock a bird and slide it under the broiler. While it cooks to juicy, crispy-skinned perfection, use our novel method to whip up a luscious, savory gravy.",
        id: 1234,
        isFavorited: false,
        links: [
          {
            url: `/recipes/13545-broiled-chicken-with-gravy`, 
            title: "Start Cooking"
          },
        ],
        image: {
          altText: '',
          cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Broiled_Chicken_with_Gravy_379_rx4dzb.jpg'
        },
        title: "Broiled Chicken with Gravy"
      }
    },
    {
      documentType: 'magazine',
      card: {
        author: [
          {
            id: 156,
            firstName: 'Kevin',
            lastName: 'Pang',
            image:
            {
              altText: '',
              cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
            },
            inactive: false,
          },
        ],
        body: "Spatchcock a bird and slide it under the broiler. While it cooks to juicy, crispy-skinned perfection, use our novel method to whip up a luscious, savory gravy.",
        id: 1234,
        isFavorited: false,
        links: [
          {
            url: `/recipes/13545-broiled-chicken-with-gravy`, 
            title: "Start Cooking"
          },
        ],
        image: {
          altText: '',
          cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Broiled_Chicken_with_Gravy_379_rx4dzb.jpg'
        },
        title: "Broiled Chicken with Gravy"
      }
    },
    {
      documentType: 'episode',
      card: {
        author: [
          {
            id: 156,
            firstName: 'Kevin',
            lastName: 'Pang',
            image:
            {
              altText: '',
              cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
            },
            inactive: false,
          },
        ],
        body: "Spatchcock a bird and slide it under the broiler. While it cooks to juicy, crispy-skinned perfection, use our novel method to whip up a luscious, savory gravy.",
        id: 1234,
        isFavorited: false,
        links: [
          {
            url: `/recipes/13545-broiled-chicken-with-gravy`, 
            title: "Start Cooking"
          },
        ],
        title: "Broiled Chicken with Gravy", 
        video: {
          image: {
            altText: '',
            cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Broiled_Chicken_with_Gravy_379_rx4dzb.jpg'
          },
          zypeId: "6226a328874a99000187da6b"
        }
      }
    },
    {
      documentType: 'video',
      card: {
        author: [
          {
            id: 156,
            firstName: 'Kevin',
            lastName: 'Pang',
            image:
            {
              altText: '',
              cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
            },
            inactive: false,
          },
        ],
        body: "Spatchcock a bird and slide it under the broiler. While it cooks to juicy, crispy-skinned perfection, use our novel method to whip up a luscious, savory gravy.",
        id: 1234,
        isFavorited: false,
        links: [
          {
            url: `/recipes/13545-broiled-chicken-with-gravy`, 
            title: "Start Cooking"
          },
        ],
        title: "Broiled Chicken with Gravy", 
        video: {
          image: {
            altText: '',
            cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/SFS_Broiled_Chicken_with_Gravy_379_rx4dzb.jpg'
          },
          zypeId: "6226a328874a99000187da6b"
        }
      }
    },
  ]
}