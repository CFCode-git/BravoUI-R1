import React from 'react';
import Demo from '../../demo';
import IconExample from './Icon.example';

const x = require('!!raw-loader!./icon.example.tsx');

const IconDemo: React.FunctionComponent = () => {
  return (
    <Demo code={x.default}>
      <IconExample/>
    </Demo>
  );
};
export default IconDemo;
