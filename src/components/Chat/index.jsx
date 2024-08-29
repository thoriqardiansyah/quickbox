import React, { useState } from "react";

const Chat = ({ chats, chat, setChats }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editChat, setEditChat] = useState(chat.message);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e, id) => {
    e.preventDefault();
    setChats(
      chats.map((chat) =>
        chat.id === id ? { ...chat, message: editChat } : chat
      )
    );

    setIsEdit(false);
  };

  const handleDelete = (id) => {
    setChats(chats.filter((chat) => chat.id !== id));
  };

  // console.log(chats);

  return (
    <form onSubmit={(e) => handleSubmit(e, chat.id)} className="">
      <p className="text-xs font-bold text-[#9B51E0] flex justify-end mt-3 pr-2">
        You
      </p>
      {/* Modify button */}
      <div className="flex gap-x-2 items-start justify-end">
        <div
          id="modal"
          className="relative text-primaryblack font-bold cursor-pointer leading-[0px]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ...
          {isOpen && (
            <div className="absolute flex flex-col divide-y divide-primarygray border border-primarygray rounded-sm  top-5 ">
              <p
                className="py-1 pl-1 pr-3 text-xs font-normal text-primaryblue bg-white"
                onClick={() => {
                  if (!isEdit) {
                    setIsEdit(!isEdit);
                  }
                }}
              >
                Edit
              </p>
              <p
                className="py-1 pl-1 pr-4 text-xs font-normal text-red-500 bg-white"
                onClick={() => handleDelete(chat.id)}
              >
                Delete
              </p>
            </div>
          )}
        </div>
        {/* Modify button end */}

        <div className="p-2 bg-[#EEDCFF] rounded-md w-[max-content]">
          {isEdit ? (
            <input
              type="text"
              className="bg-[#EEDCFF]"
              value={editChat}
              onChange={(e) => setEditChat(e.target.value)}
            />
          ) : (
            <p className="">{chat.message}</p>
          )}
          <p className="text-xs">
            {chat.date.getHours()}:{chat.date.getMinutes()}
          </p>
        </div>
      </div>
    </form>
  );
};

export default Chat;
