import React from "react";

const ShowTask = () => {
  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">0</span>
        </span>
        <span className="clearAll">Clear All</span>
      </p>
    </section>
  );
};

export default ShowTask;
