import React from 'react';
import LeadMarqueeCard from './index';

export default {
  title: 'Components|Cards/LeadMarqueeCard',
  component: LeadMarqueeCard,
};

export const Default = () => (
  <LeadMarqueeCard
    author="Kevin Pang"
    authorImageCloudinaryId="Play%20Cast%20Headshots/staff_dan_souza"
    backgroundCloudinaryId="AKO%20Articles/2020%20Web%20Articles/ZoomThanksgivinghero"
    backgroundColor="#783681"
    description="There’s a better way than squinting into a laptop."
    href="https://www.americastestkitchen.com/articles/2839-how-to-make-your-zoom-thanksgiving-feel-like-the-real-thing"
    siteKey="atk"
    stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: 'Holiday' }]}
    title="How to Make Your Zoom Thanksgiving Feel Like the Real Thing"
  />
);
