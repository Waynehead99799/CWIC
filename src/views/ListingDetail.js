import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../assets/styles/myStyles.css";

const myArray = [
  { id: "1", foo: "Private Hall" },
  { id: "2", foo: "Unl Hall" },
  { id: "3", foo: "All Bills Included" },
  { id: "4", foo: "Wi-Fi" },
  { id: "5", foo: "Ensulte" },
  { id: "6", foo: "Accesslble" },
  { id: "7", foo: "Double Bed" },
  { id: "8", foo: "Furnished" },
  { id: "9", foo: "Fridge" },
  { id: "0", foo: "Microwave" },
  { id: "90", foo: "Car Park" },
  { id: "87", foo: "Bike Store" },
  { id: "67", foo: "First Years Only" },
  { id: "56", foo: "Catered" },
  { id: "54", foo: "Cable Or Sky" },
  { id: "345", foo: "Cinema Room" },
  { id: "23", foo: "Communal Kitchen" },
  { id: "12", foo: "Communal  Lounae" },
  { id: "13", foo: "Entertainment Area" },
  { id: "14", foo: "GymLibrary" },
  { id: "15", foo: "Study Area" },
  { id: "16", foo: "Social Calendar" },
  { id: "34", foo: "House Keeping" },
  { id: "36", foo: "Lanundry Facilities" },
  { id: "37", foo: "Conclerge" },
  { id: "38", foo: "On Site Security" },
  { id: "223", foo: "Contents Insurance" },
  { id: "237", foo: "ANUK Accredlted" },
  { id: "236", foo: "Available Now" },
  { id: "235", foo: "No Deposit Required" },
  { id: "567", foo: "No Guarantor" },
];
const initialState = [
  {
    id: 0,
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

const ListingDetail = ({
  agentName,
  appartmentType,
  appartmentName,
  floor,
  bed,
  size,
  state,
  city,
  walkDistance,
  price,
}) => {
  const [previewImages, setPreviewImages] = useState(initialState);
  const [imgIndex, setImgIndex] = useState(0);
  const handleChange = (img) => {
    setImgIndex(img);
  };
  console.log(previewImages[imgIndex].id);
  return (
    <>
      {/* <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            onSubmit(values);
            resetForm();
          }}
        >
          <Form> */}
      <div className=" flex flex-wrap mt-32  ml-12 justify-between ">
        <div className="w-full lg:w-3/12 px-4 mr-auto ml-auto">
          <div className="text-sm p-8  mb-4 bg-3 text-left  rounded font-semibold ">
            <div className="py-2">Unpublish Listing</div>
            <div className="py-2">Mark as rented</div>
            <div className="py-2 text-red-500">Delete Listing</div>
          </div>
          <button
            style={{ width: "100%" }}
            className="button-background-green mb-3 ease-linear transition-all duration-150"
            type="submit"
          >
            Edit Listing
          </button>
        </div>

        <div className="w-full md:w-6/12 m-2 px-4 mr-auto ml-auto">
          <div className=" justify-center mb-4 py-8 flex w-full px-4 ">
            <img
              src={previewImages[imgIndex].image}
              alt="..."
              className="rounded  h-full w-full max-h-580-px"
              // width="80%"
              // height="400"
            />
          </div>

          <div className="flex flex-wrap  mb-4 justify-items-start ">
            {previewImages.map((img, i) => {
              return (
                <div
                  key={i}
                  className="relative h-20 m-2 max-w-100-px ml-2 lg:w-3/12"
                >
                  <img
                    key={i}
                    className={`rounded-2xl h-full  ${
                      previewImages[imgIndex].id !== img.id
                        ? "opacity-50"
                        : "opacity-0"
                    }`}
                    onClick={() => handleChange(i)}
                    src={img.image}
                    alt={"image-" + i}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex text-1 flex-wrap h-auto justify-between">
            <h5 className=" font-bold text-2xl">{appartmentName}</h5>
            <div className="flex items-center font-style">
              <div className=" text-lg font-bold ">£{price}&nbsp;</div>
              <div className=" text-xs font-bold  ">p/w</div>
            </div>
          </div>
          <div className="flex text-3 flex-wrap h-auto justify-between mb-2">
            <h5 className=" mt-1 opacity-80 text-xs">{appartmentType}</h5>
            <button>
              <div className="bg-3 inline-flex  px-2   py-2 rounded-2xl ">
                <img
                  alt="..."
                  className="w-4   h-4 "
                  src={require("../assets/img/location.svg").default}
                />
                <span className="px-2">Map</span>
              </div>
            </button>
          </div>
          <hr />
          <div className="flex flex-wrap my-4">
            <div className="w-full lg:w-6/12 pr-4 ">
              <div className="bg-3 relative w-full mb-3 inline-flex  px-4   py-3 rounded ">
                <img
                  alt="..."
                  className="w-4 h-4 pr-4 "
                  src={require("../assets/img/layer.svg").default}
                />
                <span className="text-3 font-semibold">{bed}</span>
              </div>
            </div>
            <div className="w-full lg:w-6/12 pr-4">
              <div className="bg-3 relative w-full mb-3 inline-flex  px-4   py-3 rounded ">
                <img
                  alt="..."
                  className="w-4 h-4 pr-4 "
                  src={require("../assets/img/house.svg").default}
                />
                <span className="text-3 font-semibold">{floor}</span>
              </div>
            </div>
            <div className="w-full lg:w-6/12 pr-4">
              <div className="bg-3 relative w-full mb-3 inline-flex  px-4   py-3 rounded ">
                <img
                  alt="..."
                  className="w-4 h-4 pr-4 "
                  src={require("../assets/img/maximize-3.svg").default}
                />
                <span className="text-3 font-semibold">{size}</span>
              </div>
            </div>
            <div className="w-full lg:w-6/12 pr-4">
              <div className="bg-3 relative w-full mb-3 inline-flex  px-4   py-3 rounded ">
                <img
                  alt="..."
                  className="w-4 h-4 pr-4 "
                  src={require("../assets/img/command-square.svg").default}
                />
                <span className="text-3 font-semibold">Private bathroom</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <h6 className="font-semibold text-1">About the property 🏠</h6>
            <p className="text-3 opacity-60 mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
              quam laoreet aliquet amet, ipsum mi. In molestie fames mollis
              feugiat ultricies ultrices integer in.
            </p>
            <h6 className="font-semibold text-1">Facilities include ⭐️</h6>
            <p className="text-3 opacity-60 mb-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
              quam laoreet aliquet amet, ipsum mi. In molestie fames mollis
              feugiat ultricies ultrices integer in.
            </p>
            <h6 className="font-semibold text-1"> Bills included 💸</h6>
            <p className="text-3 opacity-60 mb-4 text-sm">
              WIFI, Gas, Electricity, Heating, Water
            </p>
          </div>
          <div className="flex flex-wrap my-6">
            <div className="w-full lg:w-6/12 pr-4 ">
              <div className="bg-3 relative w-full mb-3   px-4   py-4 rounded ">
                <div className="flex justify-between">
                  <span className="text-base font-semibold text-3 opacity-80">
                    Distance to University
                  </span>
                  <span className="text-xs text-center lg:self-center justify-center opacity-60">
                    13 min walk
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 pr-4 ">
              <div className="bg-3 relative w-full mb-3 px-4 py-4 rounded ">
                <div className="flex justify-between">
                  <span className="text-base font-semibold text-3 opacity-80">
                    Public Transport
                  </span>
                  <span className="text-xs text-center lg:self-center justify-center opacity-60">
                    3 min walk
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h6 className="font-semibold text-1">Other Amenities</h6>
          <div className=" flex flex-wrap my-6">
            {myArray.map((amenities, id) => {
              return (
                <div key={id} className="mx-6 lg:w-3/12 md:w-4/12 w-6/12">
                  <div className="inline-flex">
                    <img
                      alt="..."
                      className="w-4 h-4  "
                      src={require("../assets/img/basic-tick1.svg").default}
                    />
                    <span className=" inline-block text-3 opacity-80 text-sm px-2 ">
                      {amenities.foo}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
          <div className="my-4 ">
            <h6 className="font-semibold text-1 mt-4 px">Agent Details</h6>
            <div className="max-w-210-px m-4">
              <div className="text-sm px-4 py-2  mb-4 bg-3 text-left   rounded font-semibold ">
                <div className="py-2 text-3">Warwick Estates</div>
                <div className="py-2 text-3">Edward McCarren</div>
              </div>
              <Link to={"/profile"}>
                <button
                  style={{ borderColor: "#a5ce22" }}
                  className="px-4 py-2 w-full  rounded bg-white border text-1  "
                >
                  View Agent Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </Form>
        </Formik> */}
    </>
  );
};
export default ListingDetail;
ListingDetail.defaultProps = {
  agentName: "jordern peterson",
  appartmentType: "University of Warwick",
  floor: "ground floor",
  bed: "Small double bed",
  size: "13 m2 / 139 sq ft",
  appartmentName: "collage of colors",
  state: "laincaster",
  city: "manhaten",
  walkDistance: 10,
  price: 123,
};

ListingDetail.propTypes = {
  personName: PropTypes.string,
  appartmentType: PropTypes.string,
  floor: PropTypes.string,
  bed: PropTypes.string,
  size: PropTypes.string,
  appartmentName: PropTypes.string,
  state: PropTypes.string,
  city: PropTypes.string,
  walkDistance: PropTypes.number,
  price: PropTypes.number,
};
