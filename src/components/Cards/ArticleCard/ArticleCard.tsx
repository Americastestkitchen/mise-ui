import React, { PropsWithChildren, ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import { lg, md, untilMd, xxlg } from '../../../styles/breakpoints';
import { color, font } from '../../../styles';
import { cssThemedColor, withThemes, cssThemedTextLinkBold } from '../../../styles/mixins';
import Badge from '../../Badge';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import Sticker from '../shared/Sticker';
import { Author, BylineListArticleCard } from '../../BylineList';
import { InferStyledTypes } from '../../../styles/utility-types';

const cssThemedDescriptionFont = withThemes({
  default: css`font-family: ${font.mwr};`,
  cco: css`font-family: ${font.pnr};`,
});

const cssThemedBackgroundColor = withThemes({
  default: css`background-color: ${color.white};`,
  cco: css`background-color: ${color.whiteSmoke};`,
});

/*
 * Below md image is only set height, above md card is set height.
 * Below md we want min-content height on card body, above md we center to set card height.
 */

const Card = styled.a`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  ${md(css`
    grid-template-columns: 272px auto;
    grid-template-rows: 272px;
  `)}
  ${lg(css`
    grid-template-columns: 416px auto;
    grid-template-rows: 272px;
  `)}
  ${xxlg(css`
    grid-template-columns: 488px auto;
    grid-template-rows: 272px;
  `)}
`;

const CardImage = styled.div`
  overflow: hidden;
  ${untilMd(css`
    height: 190px;
  `)}
  img, picture {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const CardBody = styled.div`
  ${cssThemedBackgroundColor}
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 16px;
`;

const Title = styled.h3`
  ${cssThemedTextLinkBold}
  font-size: 23px;
  line-height: 26px;
`;

const Description = styled.div`
  ${cssThemedDescriptionFont}
  ${cssThemedColor}
  font-size: 16px;
  line-height: 26px;
  ${untilMd(css`
    display: none;
  `)}
`;

const StickerGroup = styled.div`
  > * {
    margin-bottom: 0 !important;
    &:first-child {
      margin-left: 0 !important;
    }
  }
`;

const BadgePlacement = styled.div`
  position: absolute;
  padding: 8px;
`;

type SplitCardProps = PropsWithChildren<{
  linkProps: InferStyledTypes<typeof Card>;
  documentSiteKey: 'atk' | 'cio' | 'cco';
  picture: ReactNode;
}>;

function SplitCard({
  linkProps,
  documentSiteKey,
  picture,
  children,
}: SplitCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card data-qa="article-card" {...linkProps}>
      { !imageError ? (
        <>
          <CardImage onError={() => setImageError(true)}>
            {picture}
          </CardImage>
          <BadgePlacement>
            <Badge type={documentSiteKey} fill={color.transparentBlack} />
          </BadgePlacement>
        </>
      ) : null}
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
}

export type ArticleCardProps = {
  title: string;
  description: string;
  stickers: { text: string, type: string }[];
  authors: Pick<Author, 'firstName' | 'lastName' | 'photo' | 'id'>[];
  attribution: string;
  cloudinaryId: string;
  documentSiteKey: 'atk' | 'cio' | 'cco';
  linkProps: InferStyledTypes<typeof Card>;
}

export default function ArticleCard({
  title,
  description,
  stickers,
  authors,
  attribution,
  cloudinaryId,
  documentSiteKey,
  linkProps,
}: ArticleCardProps) {
  const src = cloudinaryInstance.url(cloudinaryId, { ...baseImageConfig, height: 190 });
  const srcLg = cloudinaryInstance.url(cloudinaryId, { ...baseImageConfig, height: 272 });

  return (
    <SplitCard
      linkProps={linkProps}
      documentSiteKey={documentSiteKey}
      picture={(
        <picture>
          <source srcSet={srcLg} media="(min-width: 768px)" />
          <img src={src} alt="" />
        </picture>
      )}
    >
      <StickerGroup>
        {stickers.map(sticker => <Sticker {...sticker} />)}
      </StickerGroup>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BylineListArticleCard
        authors={authors}
        attribution={attribution}
        breakpoint={550}
      />
    </SplitCard>
  );
}
