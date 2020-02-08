import React from "react";

const withClass = (Component, selector) => {
  return props => {
    return (
      <div className={selector}>
        <Component {...props} />
      </div>
    );
  };
};

export default withClass;
