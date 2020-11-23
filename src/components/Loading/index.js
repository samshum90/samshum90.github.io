import React from "react";

import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="loading__title">Loading</p>
    </div>
  );
};

export default Loading;
