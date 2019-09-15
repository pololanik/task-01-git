import React from 'react';

function Link({ children, ...props }) {
  return (
    	<a className="Application-link" {...props}>
      		{children}
    	</a>
  );
}

export default Link;
