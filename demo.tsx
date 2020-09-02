import * as React from 'react';

interface DemoProps { code: string }

const Demo: React.FunctionComponent<DemoProps> = (props) => {
  return (
    <div>
      {props.children}
      <pre>
        {props.code}
      </pre>
    </div>
  );
};

export default Demo;
