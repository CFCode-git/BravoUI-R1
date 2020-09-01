import React from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('bui-layout');

interface ContentProps extends React.HTMLAttributes<HTMLElement> {}

const content: React.FunctionComponent<ContentProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('content', {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};
export default content;
