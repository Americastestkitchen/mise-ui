import React from 'react';
import Color from './index';
import { ImportCode } from '../components';

export default {
  title: 'Design Tokens|Colors',
  component: Color,
};

/* eslint-disable quotes */
export const All = () => (
  <>
    <ImportCode>{`import { color } from '../../styles'`};</ImportCode>
    <Color tokenGroup="globalColor" heading="Global" description="Lorem ipsum dolor sit amet" />
    <Color tokenGroup="atkColor" heading="ATK" description="Lorem ipsum dolor sit amet" />
    <Color tokenGroup="ccoColor" heading="CCO" description="Lorem ipsum dolor sit amet" />
    <Color tokenGroup="cioColor" heading="CIO" description="Lorem ipsum dolor sit amet" />
    <Color tokenGroup="socialColor" heading="Social" description="Lorem ipsum" />
  </>
);
/* eslint-enable quotes */
