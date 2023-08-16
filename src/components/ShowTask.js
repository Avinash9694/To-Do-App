import React from "react";

const ShowTask = ({ tasklist, setTasklist }) => {
  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </span>
        <span className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </span>
      </p>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
