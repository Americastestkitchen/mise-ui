import React from 'react';
import type { ComponentMeta } from '@storybook/react';
import {
  BackgroundCard,
  BackgroundCardAnchor,
  BackgroundCardStickers,
  BackgroundCardSubtitle,
  BackgroundCardTitle,
} from './BackgroundCard';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import Badge from '../../Badge';
import { FeatureCardUserAttributions } from '../shared/UserAttributions';
import FavoriteButtonWithBg from '../shared/FavoriteRibbonWithBg';
import { TopResultCardWrapper } from './TopResultCard';
import { Font1, Font2, Font3, SideCard } from './SideCard';

export default {
  title: 'Components/Cards/TopResultCard',
  component: BackgroundCard,
} as ComponentMeta<typeof BackgroundCard>;

const cloudinaryId = '22391_sfs-chocolate-crinkle-cookies-35';
const title = 'Chocolate Crinkle Cookies';
const description = 'These eye-catching cookies are as much about looks as they are about flavor. The problem is, most are neither chocolaty nor crinkly..';
const siteKey = 'atk';
const objectID = 'recipe_8125';
const isAuthenticated = true;
const stickers = ['new', 'Top Result'];
const avgRating = isAuthenticated ? 4.02 : undefined;
const numRatings = isAuthenticated ? 32 : undefined;
const commentsCount = 32 ?? 0;
const yields = 'Makes 22 cookies'?.replace(/serves([\s]?)/i, '');
const recipeTimeNote = '1¼ hours, plus 20 minutes cooling';

export const FeatureCard = () => {
  const srcDesktop = cloudinaryInstance.url(cloudinaryId, {
    ...baseImageConfig,
    width: 344,
    height: 360,
  });

  const srcMobile = cloudinaryInstance.url(cloudinaryId, {
    ...baseImageConfig,
    width: 344,
    height: 360,
  });
  return (
    <BackgroundCardAnchor href="#">
      <BackgroundCard
        picture={(
          <picture>
            <source srcSet={srcDesktop} media="(min-width: 768px)" />
            <img src={srcMobile} alt="" />
          </picture>
        )}
        topLeft={<Badge type={siteKey} fill="rgba(0, 0, 0, 0.7)" />}
        topRight={isAuthenticated ? (
          <FavoriteButtonWithBg
            objectId={objectID}
            siteKey={siteKey}
            title={title}
          />
        ) : null}
      >
        <BackgroundCardStickers stickers={stickers} />
        <BackgroundCardTitle>{title}</BackgroundCardTitle>
        <FeatureCardUserAttributions
          avgRating={avgRating}
          commentsCount={commentsCount}
          numRatings={numRatings}
        />
        <BackgroundCardSubtitle>Recipe</BackgroundCardSubtitle>
      </BackgroundCard>
    </BackgroundCardAnchor>
  );
};

export const TopResultCard = () => {
  const src = cloudinaryInstance.url(cloudinaryId, {
    ...baseImageConfig,
    width: 344,
    height: 360,
  });

  return (
    <TopResultCardWrapper
      href="#"
      data-result-click="top-result"
    >
      <BackgroundCard
        picture={(
          <picture>
            <img src={src} alt="" />
          </picture>
        )}
        topLeft={<Badge type="atk" fill="rgba(0, 0, 0, 0.7)" />}
        topRight={isAuthenticated ? (
          <FavoriteButtonWithBg
            objectId="recipe_8123"
            siteKey="atk"
            title={title}
          />
        ) : null}
      >
        <BackgroundCardStickers stickers={stickers} />
        <BackgroundCardTitle>{title}</BackgroundCardTitle>
        <FeatureCardUserAttributions
          avgRating={avgRating}
          commentsCount={commentsCount}
          numRatings={numRatings}
        />
        <BackgroundCardSubtitle>Recipe</BackgroundCardSubtitle>
      </BackgroundCard>
      <SideCard>
        <Font1>Member Favorite</Font1>
        <Font2>{description}</Font2>
        <Font3>
          {yields && (
            <div>
              <strong>Serves</strong> {yields}
            </div>
          )}
          {recipeTimeNote && (
            <div>
              <strong>Time</strong> {recipeTimeNote}
            </div>
          )}
        </Font3>
      </SideCard>
    </TopResultCardWrapper>
  );
};
