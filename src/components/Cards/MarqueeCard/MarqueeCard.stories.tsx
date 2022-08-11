import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import MarqueeCard from './MarqueeCard';
import { color, spacing } from '../../../styles';

export default {
  title: 'Components/Cards/MarqueeCard',
  component: MarqueeCard,
  decorators: [
    Story => (
      <div style={{
        backgroundColor: color.whiteSmoke,
        padding: spacing.sm,
      }}
      >
        <Story />
      </div>
    ),
  ],
}as ComponentMeta<typeof MarqueeCard>;

const Template: ComponentStory<typeof MarqueeCard> = args => <MarqueeCard {...args} />;

export const Default = Template.bind({});

Default.args = {
  author: 'Kevin Pang',
  authorImageCloudinaryId: 'AKO%20Articles/Author_Headshots/staff_kevin_pang',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1/AKO%20Articles/Cooking%20for%20One/SFS_LemonySpaghettiGarlicPineNuts-4',
  description: 'Including a virtual bread project; a punchy, small-batch hot sauce; and a digital encyclopedia of Texas tacos.',
  href: 'https://www.americastestkitchen.com/articles/2839-how-to-make-your-zoom-thanksgiving-feel-like-the-real-thing',
  publishDate: 'Yesterday',
  siteKey: 'atk',
  stickers: [
    { type: 'priority', text: 'new' },
    { type: 'editorial', text: 'Community' },
  ],
  title: '10 Things in the Food World We Loved in November',
};

export const NoAuthorImage = Template.bind({});

NoAuthorImage.args = {
  ...Default.args,
  author: 'Julia Collin',
  authorImageCloudinaryId: '',
  siteKey: 'cco',
};
