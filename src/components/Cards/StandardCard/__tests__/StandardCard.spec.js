import React from 'react';
import { ThemeProvider } from 'styled-components';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import StandardCard, {
  StyledBadge,
  StyledFavoriteButton,
  StickerGroup,
  StyledSticker,
  StyledTitle,
} from '../StandardCard';
import Attributions from '../../shared/Attributions/Attributions';
import CtaLink from '../../shared/CtaLink/CtaLink';
import Image from '../../shared/Image/Image';
import breakpoints from '../../../../styles/breakpoints';

const baseRecipe = {
  className: null,
  secondaryAttribution: 1,
  contentType: 'recipe',
  contentTypeFormatted: 'Recipe',
  ctaText: null,
  ctaUrl: null,
  displayCookbook: false,
  displaySecondaryAttribution: true,
  displayFavoritesButton: false,
  displayLockIcon: true,
  stickers: [{ text: 'new', type: 'priority' }],
  imageAlt: '',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces,h_200,q_auto:low/22391_sfs-chocolate-crinkle-cookies-35',
  isFavorited: false,
  objectId: 'recipe_8125',
  onClick: null,
  shopPrices: null,
  siteKey: 'atk',
  siteKeyFavorites: null,
  title: 'Chocolate Crinkle Cookies',
  href: 'https://www.americastestkitchen.com/recipes/8125-chocolate-crinkle-cookies?incode=MASAD00L0&ref=new_search_experience_3',
};

const baseTasteTest = {
  className: null,
  secondaryAttribution: 1,
  contentType: 'taste_test',
  contentTypeFormatted: 'Taste Test',
  ctaText: 'Buy The Winner',
  ctaUrl: 'http://www.amazon.com/dp/B00N9TX628/?tag=atksearchresult-20',
  displayCookbook: false,
  displaySecondaryAttribution: true,
  displayFavoritesButton: false,
  displayLockIcon: true,
  stickers: [{ text: '6 tested', type: 'editorial' }],
  imageAlt: '',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy,g_faces,h_200,q_auto:low/26529_sil-baking-powder-argo-double-acting-baking-powder',
  isFavorited: false,
  objectId: 'taste_test_1644',
  onClick: null,
  shopPrices: null,
  siteKey: 'atk',
  siteKeyFavorites: null,
  title: 'Baking Powder',
  href: 'https://www-staging.americastestkitchen.com/taste_tests/1644-baking-powder?incode=MASAD00L0&ref=new_search_experience_1',
};

describe('StandardCard component', () => {
  const componentSetup = (props) => {
    const testRenderer = TestRenderer.create(
      <ThemeProvider
        theme={{ breakpoints }}
      >
        <StandardCard
          {...props}
        />
      </ThemeProvider>,
    );
    return testRenderer.root;
  };

  it('Renders with an image', () => {
    const testInstance = componentSetup(baseRecipe);
    expect(testInstance.findByType(Image));
  });

  it('Renders without an image', () => {
    const testInstance = componentSetup({
      ...baseRecipe,
      imageUrl: null,
    });
    expect(testInstance.findAllByType(Image).length).toBe(0);
  });

  it('Renders with a correct site badge', () => {
    const testInstance = componentSetup(baseRecipe);
    expect(testInstance.findByType(StyledBadge).props.type).toBe(baseRecipe.siteKey);
  });

  it('Renders with a "new" sticker', () => {
    const testInstance = componentSetup(baseRecipe);
    expect(testInstance.findByType(StyledSticker).props.type).toBe('priority');
  });

  it('Renders without stickers', () => {
    const testInstance = componentSetup({
      ...baseRecipe,
      stickers: null,
    });
    expect(testInstance.findAllByType(StickerGroup).length).toBe(0);
  });

  it('Renders with a title', () => {
    const testInstance = componentSetup(baseRecipe);
    expect(testInstance.findByType(StyledTitle).props.title).toBe(baseRecipe.title);
  });

  it('Renders with a comment count', () => {
    const testInstance = componentSetup(baseRecipe);
    expect(
      testInstance.findByType(Attributions).props.secondaryAttribution,
    ).toBe(baseRecipe.secondaryAttribution);
  });

  it('Renders fallback content type attribution', () => {
    const testInstance = componentSetup({
      ...baseRecipe,
      contentTypeFormatted: null,
    });
    expect(
      testInstance.findByType(Attributions).props.primaryAttribution,
    ).toBe(baseRecipe.contentType);
  });

  it('Renders without a FavoriteButton', () => {
    const testInstance = componentSetup(baseRecipe);
    expect(testInstance.findAllByType(StyledFavoriteButton).length).toBe(0);
  });

  it('Renders with a FavoriteButton', () => {
    const testInstance = componentSetup({
      ...baseRecipe,
      displayFavoritesButton: true,
      siteKeyFavorites: 'atk',
    });
    expect(testInstance.findByType(StyledFavoriteButton));
  });

  it('Renders with a CTA Link for a Taste Test', () => {
    const testInstance = componentSetup(baseTasteTest);
    expect(testInstance.findByType(CtaLink));
  });
});
