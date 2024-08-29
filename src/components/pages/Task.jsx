import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import TaskForm from "../TaskForm";
import ListTask from "../ListTask";
import Dropdown from "../Dropdown";

const Task = () => {
  const { taskOpen } = useOutletContext();
  const [newTask, setNewTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [option, setOption] = useState("My Task");
  const [isLoading, setIsLoading] = useState(true);

  const handleChecked = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const calculateDays = (dueDate) => {
    const currentDate = new Date();
    const due = new Date(dueDate);
    const timeDifference = due - currentDate;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  useEffect(() => {
    if (option === "Urgent To-Do") {
      const sortedTasks = [...tasks].sort((a, b) => {
        const daysLeftA = calculateDays(a.date);
        const daysLeftB = calculateDays(b.date);
        return daysLeftA - daysLeftB;
      });
      setTasks(sortedTasks);
    }
  }, [option]);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  return (
    <section
      className={`absolute right-52 bottom-28 w-[550px] h-[550px] bg-white rounded-md px-8 py-6 ${
        taskOpen ? "" : "hidden"
      }`}
    >
      {/* Header task */}
      <div className="flex justify-between mb-[22px]">
        <Dropdown option={option} setOption={setOption} />
        <button
          type="button"
          className="px-4 py-2 text-white bg-primaryblue rounded-md"
          onClick={() => {
            setNewTask(true);
          }}
        >
          New Task
        </button>
      </div>
      {/* Header task end */}
      {isLoading ? (
        <div className="relative flex flex-col items-center top-32 gap-5">
          <div className="w-[60px] h-[60px] border-8 border-t-[#C4C4C4] rounded-full animate-spin"></div>
          <p>Loading Tasks...</p>
        </div>
      ) : (
        <div className="divide-y divide-primaryblack">
          {/* List task */}
          {tasks.map((task) => {
            return (
              <ListTask
                task={task}
                handleChecked={() => handleChecked(task.id)}
                handleDelete={() => handleDelete(task.id)}
                key={task.id}
              />
            );
          })}
          {/* List task end */}

          {/* Submitform task */}
          <TaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            tasks={tasks}
            setTasks={setTasks}
          />
          {/* Submitform task end */}
        </div>
      )}
    </section>
  );
};

export default Task;
