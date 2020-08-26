import * as ReactDOM from 'react-dom';
import * as React from 'react';
import Icon from './Icon';

const fn: React.MouseEventHandler = (e) => {
  console.log(e.target);
};

ReactDOM.render(<div>
  <Icon name="qq"
        className="chow"
        onClick={fn}
        onMouseEnter={() => console.log('enter')}
        onMouseLeave={() => console.log('leave')}
  />
</div>, document.querySelector('#root'));

