import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chat from "../Chat";
import axios from "axios";

const DetailInbox = () => {
  const [chat, setChat] = useState("");
  const [chats, setChats] = useState([]);
  const [comments, setComments] = useState([]);
  const [newMessage, setNewMessage] = useState(false);

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/comments`
        );
        const data = res.data;
        const comment = data.slice(0, 3);
        setComments(comment);
      } catch (err) {
        console.log(err.message);
      }
    };

    getComments();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (chat) {
      setChats([...chats, { id: Date.now(), message: chat, date: new Date() }]);
      setChat("");
      setNewMessage(true);
      setTimeout(() => setNewMessage(false), 5000);
    }
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <section className="fixed right-[130px] bottom-[120px] w-[550px] h-[550px] bg-white rounded-md">
      {/* Header section */}
      <div className="flex justify-between items-center px-5 py-2 border-b border-primaryblack">
        <div className="flex gap-x-5 items-center">
          <Link to={"/inbox"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>

          <div>
            <h2 className="text-lg font-bold text-primaryblue leading-tight">
              Janet Weaver
            </h2>
            <p>3 Participants</p>
          </div>
        </div>

        <Link to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </Link>
      </div>
      {/* Header section end */}

      {/* Message section */}
      <div className="h-[450px] overflow-y-auto px-5 py-3">
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="my-3">
              <p className="text-sm text-[#E5A443]">{comment.email}</p>
              <div className="flex gap-x-2 items-start ">
                <p className="p-2 bg-[#FCEED3] rounded-md w-[max-content]">
                  {comment.body}
                </p>
                <div className="text-primaryblack font-bold cursor-pointer leading-[0px]">
                  ...
                </div>
              </div>
            </div>
          );
        })}
        {chats.map((item, index) => {
          const showDate =
            index === 0 ||
            formatDate(chats[index - 1].date) !== formatDate(item.date);
          return (
            <React.Fragment key={item.id}>
              {showDate && (
                <div className="relative w-full my-4">
                  <span className="h-[2px] w-full bg-black block absolute top-1/2"></span>
                  <p className="py-2 px-5 w-[max-content] bg-white left-1/2 -translate-x-1/2 text-center z-50 relative">
                    {formatDate(item.date)}
                  </p>
                </div>
              )}

              <div
                id="line new message"
                className={`relative w-full my-4 ${
                  newMessage && index === chats.length - 1 ? "" : "hidden"
                }`}
              >
                <span className="h-[2px] w-full bg-[#EB5757] block absolute top-1/2"></span>
                <p className="py-2 px-5 w-[max-content] bg-white text-[#EB5757] left-1/2 -translate-x-1/2 text-center z-50 relative">
                  New Message
                </p>
              </div>

              <Chat
                key={item.id}
                chats={chats}
                chat={item}
                setChats={setChats}
              />
            </React.Fragment>
          );
        })}
      </div>
      {/* Message section end */}

      {/* Submit form section*/}
      <form
        className="relative flex items-center gap-x-5 px-5 py-2 bg-white rounded-b-md"
        onSubmit={handleSubmit}
      >
        {/* Notif new message */}
        <p
          className={`absolute left-1/2 -translate-x-1/2 -top-8 bg-blue-100 px-3 py-1 text-primaryblue rounded-md ${
            newMessage ? "" : "hidden"
          }`}
        >
          New message
        </p>
        {/* Notif new message end */}
        <input
          type="text"
          className="w-full px-3 py-1 focus:outline-none border border-black rounded-md placeholder:text-primaryblack"
          placeholder="Type a new message"
          value={chat}
          onChange={(e) => setChat(e.target.value)}
        />{" "}
        <button
          type="submit"
          className="px-3 py-1 bg-primaryblue text-white rounded-md"
        >
          Submit
        </button>
      </form>
      {/* Submit form section end */}
    </section>
  );
};

export default DetailInbox;
