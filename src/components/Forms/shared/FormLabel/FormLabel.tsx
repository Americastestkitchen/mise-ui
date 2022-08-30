import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight } from '../../../../styles';

const FormLabelEl = styled.label`
  color: ${color.eclipse};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
`;
export type FormLabelProps = PropsWithChildren<{
  hidden?: boolean;
  inputId: string | undefined;
}>
const FormLabel = ({
  children,
  hidden = false,
  inputId,
}: FormLabelProps) => (
  <FormLabelEl
    className={hidden ? 'visually-hidden' : ''}
    data-testid="form-label"
    htmlFor={inputId}
  >
    {children}
  </FormLabelEl>
);
export default FormLabel;
