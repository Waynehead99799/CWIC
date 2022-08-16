import React from "react";

import { Link } from "react-router-dom";

const agentName = "George Henson";
const agentType = "Warwick Estates";

export default function Profile() {
  return (
    <main className="profile-page">
      <div className="flex content-center mt-20 items-center justify-center h-full">
        <div className="w-full md:w-6/12 lg:w-3/12 px-4 ">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-2xl ">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 font-style rounded-xl">
              <div className="  mb-6 mt-10 font-style text-2xl font-semibold">
                <small className="text-1">Your Profile</small>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="relative w-auto mr-4  ">
                  <div className=" flex justify-items-start ">
                    <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
                      <img
                        alt="..."
                        className="w-full rounded-full align-middle border-none shadow-lg"
                        src={require("assets/img/team-1-800x800.jpg").default}
                      />
                    </span>
                    <div className="pl-4 leading-snug ">
                      <h5 className="text-1  font-semibold text-lg">
                        {agentName}
                      </h5>

                      <span className="font-semibold text-base text-3 opacity-60 hover:none">
                        <p>{agentType}</p>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="  mb-6 mt-10 font-style text-base font-semibold">
                  <h4 className="text-1">About the agency</h4>
                  <p className="tex-3 opacity-60 text-sm text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className=" w-full text-center mt-6">
                  <Link to={"/profile/EditProfile"}>
                    <button
                      className="w-full button-background-green text-white text-base font-bold mb-1"
                      type="button"
                    >
                      Edit Profile
                    </button>
                  </Link>
                </div>

                <div className="text-center w-full mt-4">
                  <button
                    className="w-full hover:button-background-dark text-3 leading-snug bg-3 py-5 rounded text-base	 font-bold mb-1"
                    type="button"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
