import React from 'react';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';

interface DialogProps {
  visible: boolean
}

const scopedClass = scopedClassMaker('bui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  return (
    props.visible ?
      <React.Fragment>
        <div className={sc('mask')}/>
        <div className={sc()}>
          <div className={sc('close')}>
            <Icon name="close"/>
          </div>
          <header className={sc('header')}>
            /*TODO 太长有bug */
            提示
          </header>
          <main className={sc('main')}>
            {props.children}
          </main>
          <footer className={sc('footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </React.Fragment>
      :
      null
  );
};
export default Dialog;
