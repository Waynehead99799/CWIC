import CardSettings from "components/Cards/CardSettings";
import NotificationCard from "components/Cards/NotificationCard";
import React from "react";

function Messages({ onClick }) {
  // const { personName, flatName, flatType, messageHint } = props;
  function clickHandler() {
    console.log("hello");
  }
  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <main>
        <div className=" flex flex-wrap mt-32  ml-12 justify-between ">
          <div className="w-full lg:w-3/12 md:w-4/12  mr-auto ml-auto">
            <h3 className="text-2xl text-1 mb-2 font-semibold leading-normal">
              Your Messages
            </h3>
            <NotificationCard
              onClick={clickHandler}
              personName={"jaimy petterrs"}
              flatName={" sev street"}
              flatType={"studio"}
              messageHint={
                "alow horses and fast women will take you down easily "
              }
            />
            <NotificationCard />
            <NotificationCard />
          </div>
          <div className="w-full md:w-6/12 mr-auto ml-auto">
            <CardSettings />
          </div>
        </div>
        {/* <Footer /> */}
      </main>
    </>
  );
}

export default Messages;
