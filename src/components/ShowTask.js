import React from "react";

const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  function handleEdit(id) {
    const selectedTask = tasklist.find((item) => item.id === id);
    setTask(selectedTask);
  }

  function handleDelete(id) {
    const newList = tasklist.filter((item) => item.id !== id);
    setTasklist(newList);
  }
  return (
    <section className="showTask">
      <p className="head">
        <span>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </span>

        <span onClick={() => setTasklist([])} className="clearAll">
          Clear All
        </span>
      </p>

      <ul>
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>

            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>

            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
