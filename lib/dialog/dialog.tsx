import React, {ReactElement, ReactNode} from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';
import {Icon} from '../index';
import {scopedClassMaker} from '../helpers/classes';

interface DialogProps {
  visible: boolean
  buttons?: Array<ReactElement>
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

  const result = props.visible &&
    <React.Fragment>
      <div className={sc('mask')} onClick={onClickCloseMask}/>
      <div className={sc('')}>
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

          {props.buttons && props.buttons.map((button, index) => React.cloneElement(button, {key: index}))}
        </footer>
      </div>
    </React.Fragment>;
  return (
    ReactDOM.createPortal(result, document.body)
  );
};

Dialog.defaultProps = {
  closeOnClickMask: false
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
  const close = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const component = (
    <Dialog
      visible={true}
      buttons={buttons}
      onClose={() => {
        close();
        afterClose && afterClose();
      }}
    > {content}
    </Dialog>
  );
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(component, div);
  return close;
};

const alert = (content: string) => {
  const button = <button onClick={() => close()}>ok</button>;
  const close = modal(content, [button]);
};

const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const onYes = () => {
    close();
    yes && yes();
  };
  const onNo = () => {
    close();
    no && no();
  };
  const buttons = [
    <button onClick={onYes}>yes</button>,
    <button onClick={onNo}>no</button>
  ];
  const close = modal(content, buttons, no);
};

export {alert, confirm, modal};
export default Dialog;
