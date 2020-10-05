import React from 'react';

const JsxExample = () => {
  return (
    <div>
      <h1>hi all</h1>
    </div>
  );
};

const NonJsxExample = () => {
  return React.createElement(
    'div',
    { id: 'hello' },
    React.createElement('h2', { className: 'man' }, 'Hello Man')
  );
};

const JsxWithAndWithout = {
  JsxExample,
  NonJsxExample,
};

export default JsxWithAndWithout;
