import React from "react";
import PropTypes from "prop-types";

export default function NotificationCard({
  onClick,
  personName,
  flatName,
  flatType,
  messageHint,
}) {
  var currentdate = new Date();
  var arrivaldate =
    currentdate.getDate() +
    " " +
    currentdate.toLocaleString("default", { month: "short" });
  var arrivalTime = currentdate.getHours() + ":" + currentdate.getMinutes();

  return (
    <>
      <div
        onClick={onClick}
        className=" bg-3 rounded mb-6 xl:mb-2 shadow-lg m-4"
      >
        <div className="flex-auto p-4">
          <div className="flex">
            <div className="relative w-auto mr-4  ">
              <div className="items-center flex">
                <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                  <img
                    alt="..."
                    className="w-full rounded-full align-middle border-none shadow-lg"
                    src={require("assets/img/team-1-800x800.jpg").default}
                  />
                </span>
              </div>
            </div>
            <div className="relative w-full  max-w-full flex-grow flex-1  ">
              <div className="flex flex-wrap h-auto justify-between">
                <h5 className="text-3  font-bold text-base">{personName}</h5>
                <div
                  style={{ fontSize: 9 }}
                  className="justify-end opacity-50 leading-snug text-right"
                >
                  <span>{arrivaldate}</span>
                  <br />
                  <span>{arrivalTime}</span>
                </div>
              </div>
              <span className="font-semibold text-xs text-blueGray-700">
                <p>{flatName}</p>
                <p>{flatType}</p>
              </span>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="whitespace-nowrap">
                  {`${messageHint.substring(0, 20 + 1)}...`}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

NotificationCard.defaultProps = {
  personName: "Clara Simpson",
  flatName: "Red Queen",
  flatType: "Flat Share",
  messageHint: "Hi George, thank you for your...",
};

NotificationCard.propTypes = {
  personName: PropTypes.string,
  flatName: PropTypes.string,
  flatType: PropTypes.string,
  messageHint: PropTypes.string,
};
