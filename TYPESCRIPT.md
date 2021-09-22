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