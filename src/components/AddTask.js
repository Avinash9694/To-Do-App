import React from "react";

const AddTask = () => {
  return (
    <section className="addTask">
      <form>
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
