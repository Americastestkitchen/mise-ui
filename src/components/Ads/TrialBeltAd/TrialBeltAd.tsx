import React from 'react';
import styled, { css } from 'styled-components';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { font, color, withThemes } from '../../../styles';
import { lg, md } from '../../../styles/breakpoints';
import { cssThemedColor } from '../../../styles/mixins';
import { InferStyledTypes } from '../../../styles/utility-types';
import { TriangleRight } from '../../DesignTokens/Icon/svgs';

const desktop = '@media only screen and (min-width: 1280px)';

const cssThemedLightBackground = withThemes({
  default: css`background-color: ${color.frost};`,
  cio: css`background-color: ${color.ivory};`,
  cco: css`background-color: ${color.aliceBlue};`,
});

const cssThemedButton = withThemes({
  default: css`
    background-color: ${color.coldPool};
    &:hover {
      background-color: ${color.darkColdPool};
    }
  `,
  cio: css`
    background-color: ${color.squirrel};
    &:hover {
    background-color: ${color.cork};
    }
  `,
  cco: css`
    background-color: ${color.denim};
    &:hover {
     background-color: ${color.arapawa};
    }
  `,
});

const Headline = styled.p`
  font-family: ${font.pnr};
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 2.24px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-family: ${font.pnb};
  font-size: 18px;
  line-height: 1.11;
`;

const TextArea = styled.div`
  ${cssThemedColor}
  grid-area: TextArea;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageArea = styled.div`
  grid-area: ImageArea;
  height: 100px;
  width: 100px;
`;

const ButtonArea = styled.div`
  ${cssThemedButton}
  grid-area: ButtonArea;
  height: 40px;
  place-self: center;
  overflow: hidden;

  display: flex;
  place-items: center;
  place-content: center;
  font-family: ${font.pnb};
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 2.88px;
  color: ${color.white};
  text-transform: uppercase;
`;

const ClickArea = styled.a`
  display: grid; 
  grid-template-columns: auto 1fr auto; 
  grid-template-rows: auto auto auto; 
  gap: 0px 0px; 
  width: 100%;
`;

const verticalGridAreas = css`
  grid-template-areas: 
    "ImageArea TextArea TextArea"
    "ImageArea TextArea TextArea"
    "ButtonArea ButtonArea ButtonArea"; 
`;

const horizontalGridAreas = css`
  grid-template-areas: 
    "ImageArea TextArea ButtonArea"
    "ImageArea TextArea ButtonArea"
    "ImageArea TextArea ButtonArea"; 
`;

const mobileLayout = css`
  height: 192px;
  padding-top: 16px;
  padding-bottom: 16px;
  
  ${ClickArea} {
    ${verticalGridAreas}
  }
  ${TextArea} {
    padding-left: 16px;
  }
  ${ButtonArea} {
    max-width: 340px;
    width: 100%;
  }
`;

const tabletLayout = css`
  height: 150px;
  padding-top: 25px;
  padding-bottom: 25px;
  
  ${ClickArea} {
    ${horizontalGridAreas}
  }
  ${TextArea} {
    padding-right: 16px;
  }
  ${Headline} {
    letter-spacing: 2.56px;
    line-height: 20px;
    margin-bottom: 6px;
  }
  ${ButtonArea} {
    width: 200px;
  }
`;

const tabletLargeLayout = css`
  ${ButtonArea} {
    width: 272px;
  }
`;

const desktopLayout = css`
  ${TextArea} {
    padding-left: 32px;
    padding-right: 32px;
  }
  ${Headline} {
    font-size: 16px;
  }
  ${Description} {
    font-size: 23px;
    line-height: 26px;
  }
  ${ButtonArea} {
    margin-right: 72px;
  }
`;

const Background = styled.div`
  ${cssThemedLightBackground}

  ${mobileLayout}
  ${md(css`${tabletLayout}`)}
  ${lg(css`${tabletLargeLayout}`)}
  ${desktop} {
    ${desktopLayout}
  }

  box-sizing: border-box;
  width: 100vw;
  margin-left: calc((100vw - 100%) / -2);
  margin-right: calc((100vw - 100%) / -2);
  padding-left: calc((100vw - 100%) / 2);
  padding-right: calc((100vw - 100%) / 2);

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const TriangleStyles = styled.div`> .triangle-right {
  fill: ${color.white};
  margin-left: 10px;
  margin-bottom: 1px;
  height: 9px;
  width: 9px;
}`;

const TriangleRightStyled = () => (
  <TriangleStyles>
    <TriangleRight />
  </TriangleStyles>
);

export type TrialBeltAdProps = {
  href: string;
  cloudinaryId: string;
  headline: string;
  description: string;
  cta: string;
  linkProps?: InferStyledTypes<typeof ClickArea>;
};

export default function TrialBeltAd({
  href,
  cloudinaryId,
  headline,
  description,
  cta,
  linkProps = {},
}: TrialBeltAdProps) {
  const src = cloudinaryInstance.url(cloudinaryId, { ...baseImageConfig, height: 100, width: 100 });
  return (
    <Background>
      <ClickArea href={href} {...linkProps}>
        <ImageArea>
          <img
            src={src}
            alt=""
            width={100}
            height={100}
            crossOrigin="anonymous"
            decoding="async"
          />
        </ImageArea>
        <TextArea>
          <Headline dangerouslySetInnerHTML={{ __html: headline }} />
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </TextArea>
        <ButtonArea>
          {cta}<TriangleRightStyled />
        </ButtonArea>
      </ClickArea>
    </Background>
  );
}
