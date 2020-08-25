import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Icon from './Icon';

const fn = () => {
  console.log('fn');
};

ReactDOM.render(<div>
  <Icon name="qq" onClick={fn}/>
</div>, document.querySelector('#root'));

