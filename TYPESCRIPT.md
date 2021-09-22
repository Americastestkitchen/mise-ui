# Typescript Migrations

## Prop Types

1. Move the component prop type definition to a constant above the functional component.
2. Add `as const` after array literals in prop types like `oneOf`. This tells typescript the value is readonly and thus a tuple, which allows typescript to infer the string literal values instead of being any string.
3. Use the `InferProps` type utility from the prop-types package to infer the type definition from existing prop types values. Pass that type as the generic to React's type for functional components. (`React.FC`). To keep the formatting from wrapping, you can extract that type as shown. (`BadgeFC`)
4. Make sure to replace the component's propTypes value with the constant moved above the component. 

Badge.js

```javascript
    import React from 'react';
    import PropTypes from 'prop-types';

    const Badge = ({ className, fill, type }) => {
        return <div>{...}</div>
    }

    Badge.propTypes = {
        className: PropTypes.string,
        fill: PropTypes.string,
        type: PropTypes.oneOf(['atk', 'cio', 'cco', 'kids', 'school', 'shop']).isRequired,
    };

    export default Badge;
```

Badge.tsx

```typescript
    import React from 'react';
    import PropTypes, { InferProps } from 'prop-types';

    const BadgeProps = {
        className: PropTypes.string,
        fill: PropTypes.string,
        type: PropTypes.oneOf(['atk', 'cio', 'cco', 'kids', 'school', 'shop'] as const).isRequired,
    };

    type BadgeFC = React.FC<InferProps<typeof BadgeProps>>;

    const Badge: BadgeFC = ({ className, fill, type }) => {
        return <div>{...}</div>
    }

    Badge.propTypes = BadgeProps;

    export default Badge;
```

## Styled Components

>  NOTE: likely room for improvement

1. Omitted props workaround.

    Styled components already provide typing for the underlying react element. Default values passed through attrs have their type narrowed from strings to string literals. So that any other string value passed throws an error.

    `Type '"show-hide__expand-collapse-button"' is not assignable to type '"accordion-item__button" | undefined'.`

    You can recast the value back to a string with `as string`

    ```typescript
    const AccordionButton = styled.button.attrs({
        className: 'accordion-item__button' as string,
    })`
    ```

    Additional workaround to ignore the type inference.

    ```typescript
    const AccordionButton = styled.button.attrs<{}>({
        className: 'accordion-item__button',
    })`
    ```

2. Adding pass through properties.

    You can pass multiple generics after `.attrs` and before `({` but it seems that passing a single definition between `})` and  `.

    ```typescript
    const AccordionButton = styled.button.attrs({
        className: 'accordion-item__button' as string,
    })<{ hasIcon: (typeof iconKeys[number] | null | undefined)}>`
    ```
3. I ran into issues with merging the DefaultTheme definition for styled components. For now explicitly defining types is more than acceptable. Put you object definition between `css` and `.

    ```typescript
    const HeroAdInnerWrapperTheme = {
        default: css<{ backgroundColor: keyof typeof color }>`
            background-color: ${({ backgroundColor }) => `${color[backgroundColor] || 'transparent'}`};
        `
    }
    ```

## Dom Typings

1. The strict null checks compiler option has a lot of benefit, but one of the downsides is some extra noise when passing values to dom types. Many DOM types type error when null is passed as a value. You can quickly silence this with nullish coalescing to undefined with `?? undefined`.

    ```tsx
    <a
        href={ctaHref}
        target={ctaTarget ?? undefined}
        onClick={onClick ?? undefined}
        title={cta}
    >...</a>
    ```

## Misc

1. Pass through with ...restProps.

    If you run into a component that passes through properties. These are often used to point to a dom element directly and may expect those dom typings. While many will get inferred through styled components, there are some that need explicit definitions. Use `React.ComponentPropsWithoutRef` for element definitions, and combine with either interface extension or unions with types to add on new properties.

    ```typescript
        type MyButtonFC = React.FC<React.ComponentPropsWithoutRef<'button'>>
        const MyButton: MyButtonFC = ({ children, ...restProps }) => {
            return <button {...restProps}>{children}</button>
        }
    ```
