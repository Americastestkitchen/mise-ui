# Mise-UI `Carousel` component

### Do not implement this Carousel directly from `espresso` or `jarvis`.

The `mise-ui` Carousel component wraps a Flickity carousel. By itself
the `Carousel` component will not render properly as each Carousel
instance needs to be styled based on the contents of the carousel.

In practice, `Carousel` should be imported into a wrapping component, which includes styles for the desired UI presentation.

For instance, the Carousel instance depicted in this documentation is
wrapped by a styled-components instance which styles each of the
`.carousel-item` elements within the carousel. This style is required
for Flickity know how to render each item.

```
const images = new Array(10)
  .fill('http://placeimg.com/250/250/nature')
  .map((i, idx) => `${i}?i=${idx}`);

const DefaultCarouselWrapper = styled.div`
  .carousel-cell {
    margin-right: 1rem;
    min-height: 25rem;
    width: 25rem;
    max-width: 100vw;
  }
`;

export const Default = () => (
  <DefaultCarouselWrapper>
    <Carousel
      items={images}
      renderItem={(i) => <img src={i} alt="" />}
    />
  </DefaultCarouselWrapper>
);
```
