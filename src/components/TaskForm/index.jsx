import React, { useState } from "react";
import { icons } from "../constants/icons";

const TaskForm = ({ newTask, setNewTask, tasks, setTasks }) => {
  const [input, setInput] = useState({
    task: "",
    date: "",
    description: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      id: Date.now(),
      [e.target.name]: e.target.value,
      isChecked: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, input]);
    setNewTask(false);
    setInput({
      task: "",
      date: "",
      description: "",
      isChecked: false,
    });
  };

  return (
    <form className={`${newTask ? "" : "hidden"}`} onSubmit={handleSubmit}>
      <div className="flex justify-between py-4">
        <div className="flex gap-x-4">
          <input
            type="checkbox"
            className="accent-slate-500 scale-150"
            name="isChecked"
            onChange={handleChange}
          />
          <input
            type="text"
            className="px-3 py-1 focus:outline-none border border-primaryblack rounded-md placeholder:text-primaryblack"
            placeholder="Type Task Title"
            name="task"
            value={input.task}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <img src={icons.Arrow} alt="arrow" className="rotate-180" />
          <img src={icons.Threepoint} alt="threepoint" className="w-4 h-1" />
        </div>
      </div>
      <div className="mx-7">
        <div className="flex items-center gap-x-3 my-3">
          <img src={icons.Clock} alt="clock" />
          <input
            type="date"
            className="border border-primaryblack px-3 py-1 rounded-md "
            name="date"
            value={input.date}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-3">
          <img src={icons.Pen} alt="clock" />
          <input
            type="text"
            className="focus:outline-none px-3 py-1 placeholder:text-primaryblack"
            placeholder="No Description"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <input type="submit" className="hidden" />
    </form>
  );
};

export default TaskForm;
