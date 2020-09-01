import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from '../helpers/classes';

const sc = scopedClassMaker('bui-layout');

interface AsideProps extends HTMLAttributes<HTMLElement> {}

const aside: React.FunctionComponent<AsideProps> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest} >
      {props.children}
    </div>
  );
};

export default aside;
