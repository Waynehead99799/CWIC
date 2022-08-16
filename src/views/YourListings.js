/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import ViewCard from "components/Cards/ViewCard";

export default function YourListing() {
  return (
    <>
      <div className=" header w-full  flex flex-wrap relative mt-32">
        <ul className="flex flex-col lg:flex-row list-none mr-auto px-4 sm:flex-wrap ">
          <li className="flex flex-wrap   items-center ">
            <button
              className="button-background-gray button-background-dark lg:mr-1 lg:mb-0 ml-3 mr-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              Published
            </button>

            <button
              className="button-background-gray button-background-dark lg:mr-1 lg:mb-0 ml-3 mr-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              Drafts
            </button>
            <button
              className="button-background-gray button-background-dark lg:mr-1 lg:mb-0 ml-3 mr-3 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              Rented
            </button>
          </li>
        </ul>
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto px-4 ">
          <Link to={"/AddNewListing"} className="flex items-center">
            {/* <IndexDropdown /> */}
            <button
              className="button-background-gray  button-background-dark lg:mx-2 lg:mb-0 mr-2 ml-2 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              Add New listing
            </button>
          </Link>
        </ul>
      </div>
      <div className="w-full    px-12 flex flex-wrap ">
        <ViewCard
          appartmentType={"dorm Room"}
          appartmentName={"peace palace"}
          state={"ishizawa"}
          city={"tokyo"}
          walkDistance={25}
          price={123}
          agentName={"larry page"}
        />
        <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard />
        <ViewCard />
      </div>
      {/* <Footer /> */}
    </>
  );
}
