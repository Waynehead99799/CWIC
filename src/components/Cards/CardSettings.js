import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import NotificationDropdown from "components/Dropdowns/TableDropdown";
var currentdate = new Date();

var arrivalTime = currentdate.getHours() + ":" + currentdate.getMinutes();
// components
// const messageSender = true;

export default function CardSettings({ personName }) {
  const [messages, setmessages] = useState([
    { msg: "hello", time: "2:45" },
    { msg: "sakal", time: "2:45" },
    { msg: "hamanba", time: "2:45" },
    { msg: "hamanba", time: "2:45" },
    { msg: "hamanba", time: "2:45" },
  ]);

  const [currentMessage, setCurrentMessage] = useState([]);
  const [messageSender, setMessageSender] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [currentMessage]);

  function handleChange(e) {
    setCurrentMessage(e.target.value);
  }

  function handleSend(e) {
    e.preventDefault();

    setmessages([...messages, { msg: currentMessage, time: arrivalTime }]);
    setCurrentMessage("");
  }
  return (
    <>
      <div className="relative m-4 mx-5 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-3 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-4">
          <div className="text-center flex justify-between p-2 items-center">
            <div className="relative w-auto  inline-flex  items-center   ">
              <div className="w-12 h-12 mr-4  items-center justify-center rounded-full">
                <img
                  alt="..."
                  className="h-full w-full  rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
                />
              </div>
              <h5 className="text-3 font-bold text-base">{personName}</h5>
            </div>

            <NotificationDropdown />
          </div>
        </div>
        <div className="flex-auto  px-4 lg:px-10  pt-0">
          <ul className="m-4 md:min-h-full max-h-580-px  overflow-y-auto">
            {messages.map((message, index) => {
              return (
                <div key={index}>
                  {messageSender ? (
                    <li key={index} className="flex flex-wrap p-2  w-1/2">
                      <div className="input-background w-full p-4  rounded text-3 bg-white">
                        {message.msg}
                      </div>
                      <div className="opacity-50 text-3 text-xs px-2">
                        {message.time}
                        {/* <div ref={messagesEndRef} /> */}
                      </div>
                    </li>
                  ) : (
                    <li key={index} className="flex justify-end">
                      <div key={index} className="flex flex-wrap p-2 w-1/2">
                        <div className="input-background w-full p-4 rounded text-white bg-1">
                          {message.msg}
                        </div>
                        <div className="opacity-50 text-3 text-xs p-2">
                          {message.time}
                        </div>
                      </div>
                    </li>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              );
            })}
          </ul>
          <form onSubmit={handleSend} className="">
            <div className="w-full mb-3 inline-flex h-16  items-center">
              <input
                onChange={handleChange}
                type="text"
                value={currentMessage}
                className=" border-none ml-0 px-2 w-full rounded-tl-xl rounded-bl-xl bg-white h-full "
                placeholder="Walking distance to town center"
              />
              <button
                onClick={handleSend}
                className="rounded-tr-xl rounded-br-xl bg-1 z-10 h-full items-center  text-center  w-16"
              >
                <img
                  alt="..."
                  className="w-8 h-8 ml-3 "
                  src={require("../../assets/img/Send.svg").default}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
CardSettings.defaultProps = {
  personName: "Clara Simpson",
};

CardSettings.propTypes = {
  personName: PropTypes.string,
};
