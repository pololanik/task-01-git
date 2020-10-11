import React from 'react';

function Link({ children, ...props }) {
  return (
    <a className="App-link" {...props}>
      {children}
    </a>
  );
}

export default Link;
