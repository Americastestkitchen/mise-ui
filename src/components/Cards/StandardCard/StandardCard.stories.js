import React from 'react';
import { action } from '@storybook/addon-actions';
import { StandardCard } from '../StandardCard';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: 'Components|Cards/StandardCard',
  component: StandardCard,
  decorators: [withKnobs],
};

export const LoggedIn = () => (
  <StandardCard
    contentType="review"
    commentCount={5}
    ctaText={text("CTA text", "Buy the Winner")}
    ctaUrl="https://www.amazon.com/dp/B01JCNEJSO/?tag=ciosearchresult-20"
    displayCommentCount={true}
    displayFavoritesButton={true}
    displayLockIcon={false}
    imageAlt={text("Image alt text", "")}
    imageUrl={text("Image url", "https://res.cloudinary.com/hksqkdlah/image/upload/s--bab2_EML--/c_scale,dpr_2.0,f_auto,h_172,q_auto:low,w_172/40784_sil-food-storage-containers-rubbermaid-brilliance-food-storage-container-large-96-cup-1991158")}
    isFavorited={false}
    siteKey="atk"
    siteKeyFavorites="atk"
    stickers={[{type: 'priority', text: 'New'}, {type: 'editorial', text: 'Trending'}]}
    objectId=""
    onClick={action('favorites-click')}
    title={text("Title", "Plastic Food Storage Containers")}
    href="https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2"
  />
);

export const LoggedOut = () => (
  <StandardCard
    contentType="collection"
    commentCount={1}
    displayCommentCount={true}
    displayFavoritesButton={false}
    displayLockIcon={true}
    imageAlt={text("Image alt text", "")}
    imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_stir_fried_ground_pork_topping_congee-1_1_la51ps"
    objectId=""
    onClick={action('favorites-click')}
    siteKey="cio"
    siteKeyFavorites="cio"
    stickers={[{type: 'priority', text: 'New'}, {type: 'editorial', text: 'Quick'}]}
    title={text("Title", "Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork")}
    href="https://www.cooksillustrated.com/recipes/12381-congee-chinese-rice-porridge-with-stir-fried-ground-pork?extcode=MASCD00L0&ref=new_search_experience_2"
  />
);

export const NoImage = () => (
  <StandardCard
    contentType="Cookbook Collection"
    commentCount={1}
    displayFavoritesButton={true}
    displayLockIcon={true}
    displayCommentCount={true}
    objectId=""
    siteKey="cio"
    siteKeyFavorites="cio"
    stickers={[{type: 'editorial', text: 'Make Ahead'}]}
    title={text("Title", "Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork")}
    href="https://www.cooksillustrated.com/recipes/12381-congee-chinese-rice-porridge-with-stir-fried-ground-pork?extcode=MASCD00L0&ref=new_search_experience_2"
  />
);
