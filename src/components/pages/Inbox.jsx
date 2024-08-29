import React, { useState } from "react";
import { icons } from "../constants/icons";
import { Link, useOutletContext } from "react-router-dom";

const Inbox = () => {
  const { inboxOpen } = useOutletContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <div
      id="inbox"
      className={`fixed right-[130px] bottom-[120px] px-[34px] py-5 rounded-md w-[550px] h-[550px] bg-white transition-all duration-500 ease-linear transform ${
        inboxOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative mb-5">
        <input
          type="text"
          className="w-full border border-[#828282] rounded-md focus:outline-none placeholder:text-primaryblack px-10"
          placeholder="Search"
        />
        <img
          src={icons.Searchbar}
          alt="search"
          className="absolute top-1/2 -translate-y-1/2 right-10"
        />
      </div>
      {loading ? (
        <div className="relative flex flex-col items-center top-32 gap-5">
          <div className="w-[60px] h-[60px] border-8 border-t-[#C4C4C4] rounded-full animate-spin"></div>
          <p>Loading Chats...</p>
        </div>
      ) : (
        <div className="divide-y-2 divide-[#828282]">
          <Link
            to={"/inbox/detail"}
            className="pb-5 flex justify-between items-center"
          >
            <div className="flex items-center gap-x-10">
              <div className="relative ">
                <img
                  src={icons.Userblue}
                  alt="user"
                  className="absolute top-1/2 -translate-y-1/2 left-5  w-10 h-10"
                />
                <img
                  src={icons.Usergray}
                  alt="user"
                  className="z-10 w-10 h-10"
                />
              </div>
              <div>
                <div className="flex gap-x-5 items-center">
                  <h2 className="text-lg font-bold text-primaryblue leading-tight">
                    109220-Naturalization
                  </h2>
                  <p className="text-sm text-primaryblack">02/06/2024 19:30</p>
                </div>
                <h4 className="text-sm font-bold">Clementine : </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
            <span className="w-3 h-3 bg-[#EB5757] rounded-full"></span>
          </Link>
          <Link
            to={"/inbox/detail"}
            className="py-5  flex justify-between items-center"
          >
            <div className="flex items-center gap-x-10">
              <div className="relative ">
                <img
                  src={icons.Userblue}
                  alt="user"
                  className="absolute top-1/2 -translate-y-1/2 left-5  w-10 h-10"
                />
                <img
                  src={icons.Usergray}
                  alt="user"
                  className="z-10 w-10 h-10"
                />
              </div>
              <div>
                <div className="flex gap-x-5 items-center">
                  <h2 className="text-lg font-bold text-primaryblue leading-tight">
                    8405-Diana
                  </h2>
                  <p className="text-sm text-primaryblack">18/06/2024 10:30</p>
                </div>
                <h4 className="text-sm font-bold">Ervin Howell: </h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
            </div>
          </Link>
          <Link
            to={"/inbox/detail"}
            className="py-5  flex justify-between items-center"
          >
            <div className="flex items-center gap-x-10">
              <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primaryblue">
                <p className="text-white font-bold">F</p>
              </div>
              <div>
                <div className="flex gap-x-5 items-center">
                  <h2 className="text-lg font-bold text-primaryblue leading-tight">
                    FastVisa Support
                  </h2>
                  <p className="text-sm text-primaryblack">18/06/2024 10:30</p>
                </div>
                <h4 className="text-sm font-bold">Ervin Howell: </h4>
                <p className="text-sm">Hey there!, Welcome to your inbox</p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Inbox;
