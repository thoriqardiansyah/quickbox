import React, { useState } from "react";
import { icons } from "../constants/icons";

const Dropdown = ({ option, setOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const optionals = ["Personal Errands", "Urgent To-Do"];
  const handleOption = (name) => {
    setOption(name);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        className="flex items-center gap-x-1 justify-center border border-primaryblack px-4 py-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {option}
        <figure>
          <img
            src={icons.Arrow}
            alt="arrow"
            className={`transition-all duration-300 ease-linear ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </figure>
      </button>
      {isOpen && (
        <div className="absolute top-full my-2 py-2 px-4 bg-white z-20 border border-primaryblack rounded-md w-[160px] divide-y divide-primaryblack">
          {optionals.map((option, id) => {
            return (
              <button
                key={id}
                onClick={() => {
                  handleOption(option);
                }}
                type="button"
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
