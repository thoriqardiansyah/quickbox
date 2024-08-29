import React, { useState } from "react";
import { icons } from "../constants/icons";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inboxOpen, setInboxOpen] = useState(false);
  const [taskOpen, setTaskOpen] = useState(false);

  return (
    <main className="bg-[#333] w-full h-screen flex">
      <aside className="w-72 border-r border-primarywhite"></aside>
      <section className="relative w-full">
        <div className=" bg-primaryblack pt-[19px] pb-[23px] px-[26px]">
          <img src={icons.Search} alt="search" className="w-4 h-4" />
        </div>

        <nav>
          <Link to={"/task"}>
            <figure
              className={`absolute bottom-[27px] right-[34px] transition-all duration-500 ease-linear ${
                isOpen ? "-translate-x-44" : ""
              }`}
              onClick={() => {
                setTaskOpen((state) => !state);
                if (!taskOpen) setInboxOpen(false);
              }}
            >
              <img
                src={taskOpen ? icons.Taskopen : icons.Task}
                alt="task"
                className={`duration-300 ease-linear rounded-full`}
              />
            </figure>
          </Link>
          <Link to={"/inbox"} className={``}>
            <figure
              className={`absolute bottom-[27px] right-[34px] transition-all duration-500 ease-linear ${
                isOpen
                  ? "-translate-x-[88px]"
                  : taskOpen
                  ? "-translate-x-44"
                  : ""
              }
              } `}
              onClick={() => {
                setInboxOpen((state) => !state);
                if (!inboxOpen) setTaskOpen(false);
              }}
            >
              <img
                src={inboxOpen ? icons.Inboxopen : icons.Inbox}
                alt="inbox"
                className={`rounded-full transition-all duration-300 ease-linear ${
                  inboxOpen ? "shadow-[-12px_0_0_0_#4f4f4f]" : ""
                }`}
              />
            </figure>
          </Link>
          <Link to={"/"}>
            <figure
              className="absolute bottom-[27px] right-[34px]"
              onClick={() => {
                setIsOpen((state) => !state);
                setInboxOpen(false);
                setTaskOpen(false);
              }}
            >
              <img
                src={icons.Quicks}
                alt="quicks"
                className="w-[68px] h-[68px]"
              />
            </figure>
          </Link>
        </nav>

        <Outlet context={{ inboxOpen, taskOpen }} />
      </section>
    </main>
  );
};

export default Home;
