import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ViewCard({
  agentName,
  appartmentType,
  appartmentName,
  state,
  city,
  walkDistance,
  price,
}) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 max-w-580-px px-4 mt-12  ">
      <Link
        to={"/YourListing/ListingDetail"}
        className="c-card block bg-white  hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative pb-64  overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
        </div>
        <div>
          <div className="font-style justify-between mt-4">
            <h6 className="text-xs opacity-50 font-medium  text-3">
              {appartmentType}
            </h6>
            <h1 className="text-lg opacity-80 font-bold text-3">
              {appartmentName}
            </h1>
            <h3 className="text-sm opacity-60 font-semibold text-3">{state}</h3>
          </div>
          <div>
            <p className="text-xs opacity-50 text-3">{city}</p>
            <img
              alt="..."
              className="w-auto h-5 inline-block "
              src={require("../../assets/img/walk.png")}
            />
            <span className="text-xs opacity-50 font-semibold text-3">
              {walkDistance}min
            </span>
          </div>
          <div className="flex items-center font-style">
            <div className="opacity-50 text-lg font-bold text-3">
              £{price}&nbsp;
            </div>
            <div className="opacity-50 text-xs font-semibold   text-3">p/w</div>
          </div>
          <div>
            <p className="text-3 opacity-50">{agentName}</p>
          </div>
          {/* </div> */}
          {/* <h6
            style={{ color: "rgba(41, 45, 50, 1)", opacity: 0.5 }}
            className="mt-2 mb-2 text-lightGray-200 font-bold"
          >
            Flat Share
          </h6>
          <h2 className="mt-2 mb-2 text-gray-200 font-bold">
            Westwood Student Mews
          </h2>
          <p
            style={{ color: "rgba(41, 45, 50, 1)", opacity: 0.6 }}
            className="text-sm"
          >
            University of Warwick
          </p>
          <div
            style={{ color: "rgba(41, 45, 50, 1)", opacity: 0.8 }}
            className="mt-3 flex items-center"
          >
            <span className="text-xl font-semibold">£</span>
            <span className="font-bold text-xl">250</span>&nbsp;
            <span className="text-xl font-semibold">/</span>&nbsp;
            <span className="text-xs font-semibold">Week</span>&nbsp;
          </div> */}
        </div>
      </Link>
    </div>
  );
}
ViewCard.defaultProps = {
  agentName: "jordern peterson",
  appartmentType: "appartment",
  appartmentName: "collage of colors",
  state: "laincaster",
  city: "manhaten",
  walkDistance: 10,
  price: 123,
};

ViewCard.propTypes = {
  personName: PropTypes.string,
  appartmentType: PropTypes.string,
  appartmentName: PropTypes.string,
  state: PropTypes.string,
  city: PropTypes.string,
  walkDistance: PropTypes.number,
  price: PropTypes.number,
};
