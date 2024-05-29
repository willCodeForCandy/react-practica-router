import React from 'react';

const DivWithBackground = ({ className, children }) => {
  return <div className={`component-div ${className}`}>{children}</div>;
};

export default DivWithBackground;
