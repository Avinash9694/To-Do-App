import React from "react";

const AddTask = ({ tasklist, setTasklist }) => {
  function handleSubmit(e) {
    e.preventDefault();

    const date = new Date();

    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTasklist([...tasklist, newTask]);
    e.target.task.value = "";
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="task"
          name="task"
          autoComplete="off"
          placeholder="Add Task"
        ></input>
        <button type="submit">Add</button>
      </form>
    </section>
  );
};

export default AddTask;
