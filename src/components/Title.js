import React from 'react';

function Title({ text = 'Default Title' }) {
  return (
    <div className="title">
      <h2>{text}</h2>
    </div>
  );
}

export default Title;
