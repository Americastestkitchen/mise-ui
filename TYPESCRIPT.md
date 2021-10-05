# Typescript Migrations

## Prop Types

1. Because of an issue with InferProps, Typescript props should be declared in addition to propType definitions. This will let us migrate to es6 default parameters, which are deprecated in react because of future limitations.

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

    Badge.defaultProps = {
        className: '',
        fill: '#000000',
    };

    export default Badge;
```

Badge.tsx

```typescript
    import React, { ReactElement } from 'react';
    import PropTypes from 'prop-types';

    const BadgeProps = {
        className?: string;
        fill?: string;
        type: 'atk' | 'cio' | 'cco' | 'kids' | 'school' | 'shop';
    };

    const Badge = ({ 
        className, 
        fill = '#000000', 
        type 
    }: BadgeProps): ReactElement => {
        return <div>{...}</div>
    }

    Badge.propTypes = {
        className: PropTypes.string,
        fill: PropTypes.string,
        type: PropTypes.oneOf(['atk', 'cio', 'cco', 'kids', 'school', 'shop']).isRequired,
    };

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
    })<{ hasIcon: keyof typeof icons | null | undefined}>`
    ```
3. I ran into issues with merging the DefaultTheme definition for styled components. For now explicitly defining types is more than acceptable. Put you object definition between `css` and `.

    ```typescript
    const HeroAdInnerWrapperTheme = {
        default: css<{ backgroundColor: keyof typeof color }>`
            background-color: ${({ backgroundColor }) => `${color[backgroundColor] || 'transparent'}`};
        `
    }
    ```

## Misc

1. Pass through with ...restProps.

    If you run into a component that passes through properties. These are often used to point to a dom element directly and may expect those dom typings. While many will get inferred through styled components, there are some that need explicit definitions. Use `React.ComponentPropsWithoutRef` for element definitions, and combine with either interface extension or unions with types to add on new properties.

    ```typescript
        import React, { 
            ReactElement, 
            ComponentPropsWithoutRef 
        } from 'react';

        type MyButtonProps = ComponentPropsWithoutRef<'button'>;

        const MyButton = ({ children, type, ...restProps }: MyButtonProps): ReactElement => (
            <button type={type === 'submit' ? 'submit' : 'button'} {...restProps}>{children}</button>
        );
    ```
