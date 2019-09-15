import React from 'react';

function Title({ text = 'My Default Title' }) {
  return (
    <div className="subtitle">
      <h2>{text}</h2>
    </div>
  );
}

export default Title;
