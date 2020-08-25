import * as React from 'react';
import {FunctionComponent} from 'react';

interface IconProps {
  name: string
}

const Icon: FunctionComponent<IconProps> = (props) => {
  return (
    <span>{props.name}</span>
  );
};

export default Icon;
