import { AnyStyledComponent, StyledComponentInnerComponent, StyledComponentInnerOtherProps } from 'styled-components';

/** https://stackoverflow.com/questions/64054467/infer-prop-interface-from-styled-component */
export type InferStyledTypes<T extends AnyStyledComponent> =
    React.ComponentPropsWithoutRef<StyledComponentInnerComponent<T>>
    & StyledComponentInnerOtherProps<T>;
