import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('bui-layout');

interface FooterProps extends React.HTMLAttributes<HTMLElement> {}

const footer: React.FunctionComponent<FooterProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('footer', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default footer;
