# Card Carousel

Card Carousels wrap the basic `Carousel` component, allowing the implementing codebase to display a carousel consisting of `StandardCard` items or `FeatureCard` items. The list of supported types can be expanded to suit future needs.

## Render a list of Standard Card items
```
const items = [...<list of document summary objects goes here>];
<CardCarousel
  items={items}
  type="standard"
/>
```

## Render a list of Feature Card items
```
const items = [...<list of document summary objects goes here>];
<CardCarousel
  items={items}
  type="feature"
/>
```
