import React, { useState } from "react";
import { icons } from "../constants/icons";

const ListTask = ({ task, handleChecked, handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpand, setIsExpand] = useState(false);

  const calculateDays = (dueDate) => {
    const currentDate = new Date();
    const due = new Date(dueDate);
    const timeDifference = due - currentDate;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
  };
  return (
    <div className="py-2" key={task.id}>
      <div className="flex justify-between my-2">
        <div className="flex gap-x-4">
          <input
            type="checkbox"
            className="accent-slate-500 scale-150"
            name="isChecked"
            onChange={handleChecked}
          />
          {task.isChecked ? <s>{task.task}</s> : <h2>{task.task}</h2>}
        </div>
        <div className="relative flex items-center gap-x-3">
          {task.isChecked ? (
            ""
          ) : (
            <p className="text-red-500 text-xs font-medium">
              {calculateDays(task.date)} days left
            </p>
          )}
          <p className="text-xs font-medium">{task.date}</p>
          <button type="button" onClick={() => setIsExpand(!isExpand)}>
            <img
              src={icons.Arrow}
              alt="arrow"
              className={`transition-all duration-300 ease-linear ${
                isExpand ? "rotate-180" : ""
              }`}
            />
          </button>
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <img src={icons.Threepoint} alt="threepoint" className="w-4 h-1" />
          </button>
          {isOpen && (
            <button
              type="button"
              className="absolute py-2 px-4 rounded-md border border-primaryblack top-full right-0 bg-white text-red-500 text-base"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      </div>
      {isExpand && (
        <div className="mx-7">
          <div className="flex items-center gap-x-3 my-3">
            <img
              src={task.date === "" ? icons.Clock : icons.Clockblue}
              alt="clock"
            />
            {task.date === "" ? <h3>dd/mm/yyy</h3> : <h3>{task.date}</h3>}
          </div>
          <div className="flex items-center gap-x-3">
            <img
              src={task.descrption === "" ? icons.Pen : icons.Penblue}
              alt="pen"
            />
            {task.description === "" ? (
              <p>No Description</p>
            ) : (
              <p>{task.description}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListTask;
