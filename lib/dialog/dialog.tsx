import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../classes';

interface DialogProps {
  visible: boolean
  buttons: Array<ReactElement>
  onClose: React.MouseEventHandler
  closeOnClickMask?: boolean
}

const scopedClass = scopedClassMaker('bui-dialog');
const sc = scopedClass;

const Dialog: React.FunctionComponent<DialogProps> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  };
  const onClickCloseMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e);
    }
  };

  const x = props.visible ?
    <React.Fragment>
      <div className={sc('mask')} onClick={onClickCloseMask}/>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name="close"/>
        </div>
        <header className={sc('header')}>
          {/*TODO 太长有bug */}
          提示
        </header>
        <main className={sc('main')}>
          {props.children}
        </main>
        <footer className={sc('footer')}>
          {props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
        </footer>
      </div>
    </React.Fragment>
    :
    null;
  return (
    ReactDOM.createPortal(x, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

export default Dialog;
