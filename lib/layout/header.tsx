import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('bui-layout');

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const header: React.FunctionComponent<HeaderProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('header', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};
export default header;
