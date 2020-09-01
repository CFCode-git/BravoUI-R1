import React, {ReactElement} from 'react';
import {scopedClassMaker} from '../helpers/classes';
import './layout.scss';
import Aside from './aside';

const sc = scopedClassMaker('bui-layout');

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const {className, ...rest} = props;
  const children = props.children as Array<ReactElement>;
  const hasAside = 'length' in children &&
    (children as Array<ReactElement>).reduce((result, node) => {
      return result || node.type === Aside;
    }, false);
  return (
    <div className={sc({'': true, hasAside}, {extra: className})} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
