// use this.props in case of class components
//  and just props for functional components

// props are immutable

import React from 'react';

const PropExample = (props) => {
  return (
    <div>
      <h1>hi {props.name}</h1> {props.children}
    </div>
  );
};

export default PropExample;
