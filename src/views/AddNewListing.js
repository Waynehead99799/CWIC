import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
// import { object, mixed } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useAxios from "hooks/UseAxios";

import "../assets/styles/myStyles.css";

const city = [" Cansas", "lincaster", "morroco", "vatican"];
const listingType = [
  "Private Room",
  "Private Ensuit",
  "Studio Appartment",
  "Appartment",
];

const myArray = [
  { id: "1", foo: "Private Hall" },
  { id: "2", foo: "Unl Hall" },
  { id: "3", foo: "All Bills Included" },
  { id: "4", foo: "Wi-Fi" },
  { id: "5", foo: "Ensue" },
  { id: "6", foo: "Accessible" },
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
  { id: "48", foo: "CCTV/SiteSurvelllance" },
  { id: "223", foo: "Contents Insurance" },
  { id: "237", foo: "ANUK Accredlted" },
  { id: "236", foo: "Available Now" },
  { id: "235", foo: "No Deposit Required" },
  { id: "567", foo: "No Guarantor" },
];

const initialState = [{ id: null, img: [] }];

const AddNewListing = () => {
  const [image, setImage] = useState([initialState]);
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [previewImages, setPreviewImages] = useState([]);
  const [imgIndex, setImgIndex] = useState();
  const [addrSuggestion, setAddrSuggestion] = useState("");
  const inputFile = useRef(null);

  const { data } = useAxios(
    `http://54.82.160.187:4000/api/place?place=${addrSuggestion}`
  );
  // useEffect(() => {
  //   addrSuggestion
  // }[]);
  const addressHandler = (e) => {
    setAddrSuggestion(e.target.value);
  };

  // console.log(data.map());
  const validationSchema = Yup.object({
    listingTitle: Yup.string().required(),
    firstClosest: Yup.string().required("This is a required field"),
    secondClosest: Yup.string().required("This is a required field"),
    field: Yup.string().required("This is a required field"),
    address: Yup.string().required(),
    postCode: Yup.string()
      .length(6)
      .matches(/^[0-9]{5}/)
      .required()
      .label("postal Code"),
    distance: Yup.number().min(1).max(100).required("enter the Distance"),
    price: Yup.string().required("enter a Price"),
    distancemin: Yup.number().min(1).max(100).required("enter the Distance"),
    city: Yup.string().required("Please select a City").oneOf(city),
    roomSize: Yup.string().required("enter room size in m2"),
    ptDistance: Yup.number().required("enter the public Transport Ditsance"),
    bedSize: Yup.string().required("enter bed size"),
    floor: Yup.string().required("enter floor"),
    listingType: Yup.string()
      .required("Please select a Liting Type")
      .oneOf(listingType),
    aboutProperty: Yup.string().required("please fill this area"),
    facalities: Yup.string().required("please fill this area"),
    billsIncludes: Yup.string().required("please fill this area"),
    name: Yup.string().required(),
  }).shape({
    imageEr: Yup.mixed().required("File is required"),
    amenities: Yup.array().min(1).of(Yup.string().required()).required(),
  });

  const initialValues = {
    imageEr: "",
    listingTitle: "",
    field: "",
    address: "",
    postCode: "",
    price: "",
    distance: "",
    bedSize: "",
    roomSize: "",
    floor: "",
    firstClosest: "",
    secondClosest: "",
    ptDistance: "",
    city: "",
    distancemin: "",
    aboutProperty: "",
    facalities: "",
    billsIncludes: "",
    amenities: [],
  };
  const cityOptions = city.map((item, key) => (
    <option className=" relative bg-3 rounded" value={item} key={key}>
      {item}
    </option>
  ));
  const litingTypeOptions = listingType.map((item, key) => (
    <option className="rounded" value={item} key={key}>
      {item}
    </option>
  ));

  const onSubmit = (values, e) => {
    e.preventDefault();
    alert(JSON.stringify(values, null, 2));
  };
  const renderError = (message) => (
    <p className="help is-danger text-red-500">{message}</p>
  );

  useEffect(() => {
    setImage(previewImages);
    if (previewImages.length <= 0) {
      setSelectedFiles();
    }
  }, [previewImages]);

  function selectFiles(event) {
    for (let i = 0; i < event.target.files.length; i++) {
      image.push(URL.createObjectURL(event.target.files[i]));
    }
    setImage(image);
    setSelectedFiles(event.target.files);
    setPreviewImages(image);
  }

  const imageRemoveHandler = (id) => {
    setPreviewImages((current) =>
      current.filter((img, i) => {
        return i !== id;
      })
    );
  };

  const handleChange = (img) => {
    console.log(img);
    setImgIndex(img);
  };

  function handleCheckBoxChange(e) {
    let isChecked = e.target.checked;
    console.log(isChecked ? e.target.id : "sd");
  }

  const amenitiyList = myArray.map((amenities, id) => {
    return (
      <div key={id} className="mx-6 md:w-4/12 sm:w-6/12 lg:w-3/12">
        <Field
          id={amenities.id}
          name={`amenities ${id}`}
          type="checkbox"
          onMouseDown={(e) => handleCheckBoxChange(e)}
        />
        <label
          className=" inline-block text-gray-800"
          key={id}
          htmlFor={amenities.id}
        >
          {amenities.foo}
        </label>
      </div>
    );
  });
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <div className=" flex flex-wrap mt-32  ml-12 justify-between ">
            <div className="w-full lg:w-3/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl text-1 mb-2 font-semibold leading-normal">
                Add new listing
              </h3>
              <p className="text-lg font-medium   leading-relaxed mt-4 mb-4">
                Create your new listing by completing all the fields to the
                right. Remember you can always save and finish things later. If
                you have any questions please get in touch with us
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                If you have any questions please get in touch with us
              </p>
              <div className="mb-4">
                <button
                  style={{ width: "100%" }}
                  className="button-background-green  mb-3 ease-linear transition-all duration-150"
                  type="submit"
                >
                  Save draft
                </button>
                <button
                  type="button"
                  style={{ width: "100%" }}
                  className="button-background-green  mb-3 ease-linear transition-all duration-150 hover:shadow-sm"
                >
                  Publish
                </button>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto ml-auto">
              <label
                style={{
                  height: 345,
                }}
                htmlFor="upload-button"
                className=" input-background mx-4 items-center lg:w-10/12 relative flex   justify-center  mb-6  hover:shadow-lg  rounded-lg"
              >
                <div className=" justify-center items-center flex h-full w-full ">
                  {/* <label ref={inputFile} htmlFor="upload-button"> */}
                  {selectedFiles ? (
                    <img
                      src={previewImages[imgIndex] || previewImages[0]}
                      alt="..."
                      className="relative h-full  rounded"
                      width="70%"
                      height="50%"
                    />
                  ) : (
                    <p className=" relative">Click to upload pictures</p>
                  )}
                </div>
              </label>
              <input
                type="file"
                multiple
                // name="imageEr"
                id="upload-button"
                // i={inputFile}
                ref={inputFile}
                style={{
                  display: "none",
                }}
                onChange={selectFiles}
              />
              <div>
                {selectedFiles && (
                  <div className="mx-4">
                    <div className="flex flex-wrap  mb-4 justify-items-start ">
                      <button
                        onClick={() => inputFile.current.click()}
                        style={{
                          backgroundColor: "#f5f5f5",
                          lineHeight: 0,
                        }}
                        className="text-sm mr-4 rounded border-dashed lg:p-12 block text-center relative min-w-120-px max-w-120-px mb-4 mx-2 lg:w-3/12"
                        title="add"
                        type="button"
                      >
                        Add
                      </button>
                      {previewImages.map((img, i) => {
                        return (
                          <div className="relative max-w-120-px mb-4 mr-4 lg:w-3/12">
                            <img
                              className="rounded w-full max-w-120-px h-full mb-4"
                              onClick={() => handleChange(i)}
                              src={img}
                              alt={"image-" + i}
                              key={i}
                            />
                            <img
                              alt="..."
                              onClick={() => imageRemoveHandler(i)}
                              key={i + "a"}
                              className="w-5 absolute top-0 bg-white rounded right-0"
                              src={
                                require("assets/img/circle-xmark-solid.svg")
                                  .default
                              }
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-2">
                  <div className="flex flex-col min-w-0 justify-center w-full  ">
                    <Field
                      name="listingTitle"
                      type="text"
                      className="input-background relative border-none focus:outline-none outline-none"
                      placeholder="Listing title"
                    />
                    <ErrorMessage name="listingTitle" render={renderError} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-2">
                  <div className="relative w-full mb-3">
                    <Field
                      name="firstClosest"
                      type="text"
                      className="input-background py-4 border-none mt-4 w-full"
                      placeholder="First Closest University / College"
                    />
                    <ErrorMessage name="firstClosest" render={renderError} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-2">
                  <div className="relative w-full mb-3">
                    <Field
                      name="secondClosest"
                      type="text"
                      className="input-background py-4 border-none mt-4 w-full focus:outline-none   "
                      placeholder="Second Closest University / College"
                    />
                    <ErrorMessage name="secondClosest" render={renderError} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-2">
                  <div className="relative w-full mb-3">
                    <Field
                      name="city"
                      as="select"
                      className="input-background border-none rounded mt-4 w-full text-3  "
                    >
                      <option value={""} className="opacity-50 rounded text-3">
                        Select a City
                      </option>
                      {cityOptions}
                    </Field>
                    <ErrorMessage name="city" render={renderError} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-2">
                  <div className="relative w-full mb-3">
                    <Field
                      name="address"
                      type="text"
                      className="input-background py-4 border-none mt-4 w-full"
                      placeholder="Address"
                      autoComplete="off"
                      onKeyUp={addressHandler}
                      // id="designation"
                      list="address"
                    />
                    <datalist className="w-full none" id="address">
                      {data.map((item, i) => {
                        return (
                          <option className="input-background text-1" key={i}>
                            {item.description}
                          </option>
                        );
                      })}
                    </datalist>
                    <ErrorMessage name="address" render={renderError} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-2">
                  <div className="relative w-full mb-3">
                    <Field
                      name="postCode"
                      type="text"
                      className="input-background py-4 border-none mt-4 w-full"
                      placeholder="Post Code"
                    />
                    <ErrorMessage name="postCode" render={renderError} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-2 flex ">
                  <div className="w-full mb-3">
                    <Field
                      name="distance"
                      type="number"
                      className="input-background py-1 pl-16 px-2 mt-4 w-full"
                      placeholder="Walking distance to University / College"
                    />
                    <ErrorMessage name="distance" render={renderError} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-2 ">
                  <div className="flex flex-wrap">
                    <label
                      style={{
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                      className="badge-background-green z-10  bg-text-1  block font-normal text-center text-white absolute  text-base items-center justify-center w-16   mt-4"
                    >
                      £
                    </label>
                    <div className="w-full mb-3 flex">
                      <Field
                        style={{ paddingLeft: 80 }}
                        name="price"
                        type="text"
                        className="input-background  pl-16 px-2 mt-4 w-full"
                        placeholder="Price per week"
                      />
                    </div>
                  </div>
                  <ErrorMessage name="price" render={renderError} />
                </div>
                <div className="w-full px-2 lg:w-6/12  ">
                  <div className=" flex ">
                    <div className="w-full mb-3 flex justify-end">
                      <label
                        style={{
                          borderBottomRightRadius: "10px",
                          borderTopRightRadius: "10px",
                        }}
                        className=" absolute badge-background-green z-10  bg-text-1 text-center text-white  text-base items-center justify-items-end    w-16   mt-4 "
                      >
                        mins
                      </label>
                      <Field
                        name="distancemin"
                        type="text"
                        className="input-background py-1 pl-16 px-2 mt-4 w-full "
                        placeholder="Walking distance to town center"
                      />
                    </div>
                  </div>
                  <ErrorMessage name="distancemin" render={renderError} />
                </div>
                <div className="w-full px-2 lg:w-6/12  ">
                  <div className=" flex flex-wrap">
                    <label
                      style={{
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                      }}
                      className="badge-background-green z-10 block  bg-text-1  font-normal text-center text-white absolute  text-base items-center justify-center w-16   mt-4"
                    >
                      m2
                    </label>
                    <div className="w-full mb-3 flex">
                      <Field
                        style={{ paddingLeft: 80 }}
                        name="roomSize"
                        type="text"
                        className="py-1 pb-2 input-background  pl-16 px-2 mt-4 w-full "
                        placeholder="Room Size in m2, do not include 'm2'"
                      />
                    </div>
                  </div>
                  <ErrorMessage name="roomSize" render={renderError} />
                </div>
                <div className="w-full px-2 lg:w-6/12  ">
                  <div className="flex ">
                    <div className="w-full mb-3 flex justify-end">
                      <label
                        style={{
                          borderBottomRightRadius: "10px",
                          borderTopRightRadius: "10px",
                        }}
                        className=" absolute badge-background-green z-10  bg-text-1 text-center text-white  text-base items-center justify-items-end    w-16   mt-4 "
                      >
                        mins
                      </label>

                      <Field
                        name="ptDistance"
                        type="text"
                        className="input-background py-1 pl-16 px-2 my-4 w-full "
                        placeholder="Walking distance to Public TransPort"
                      />
                    </div>
                  </div>
                  <ErrorMessage name="ptDistance" render={renderError} />
                </div>

                <div className="w-full lg:w-6/12 px-2">
                  <div className="relative w-full mb-3">
                    <Field
                      name="bedSize"
                      type="text"
                      className="input-background py-4 border-none mt-4 w-full"
                      placeholder="Bed Size(eg.Double Bed)"
                    />
                    <ErrorMessage name="bedSize" render={renderError} />
                  </div>
                </div>
                <div className="w-full lg:w-6/12 px-2">
                  <div className="relative w-full mb-3">
                    <Field
                      name="floor"
                      type="text"
                      className="input-background py-4 border-none mt-4 w-full outline-none"
                      placeholder="Floor(eg.Second Floor)"
                    />
                    <ErrorMessage name="floor" render={renderError} />
                  </div>
                </div>
                <div className="w-full px-2 ">
                  <div className=" w-full mb-3">
                    <div className="flex flex-col min-w-0 justify-center w-full">
                      <Field
                        name="listingType"
                        as="select"
                        className="input-background border-none mt-4 w-full text-3  "
                      >
                        {/* <div className="rounded opacity-50 text-3"> */}
                        <option
                          value={""}
                          className=" rounded opacity-50 text-3"
                        >
                          Listing Type
                        </option>
                        {litingTypeOptions}
                        {/* </div> */}
                      </Field>
                      <ErrorMessage name="listingType" render={renderError} />
                    </div>
                  </div>

                  <Field
                    name="aboutProperty"
                    as="textarea"
                    rows="6"
                    className="block p-2.5 w-full input-background mt-4"
                    placeholder="About The Property"
                  />
                  <ErrorMessage name="aboutProperty" render={renderError} />

                  <Field
                    name="facalities"
                    as="textarea"
                    rows="6"
                    className="block p-2.5 w-full outline-none input-background mt-4"
                    placeholder="Facalities include"
                  />
                  <ErrorMessage name="facalities" render={renderError} />

                  <Field
                    rows="6"
                    name="billsIncludes"
                    as="textarea"
                    className="block p-2.5 w-full input-background mt-4"
                    placeholder="Bills include"
                  />
                  <ErrorMessage name="sbillsIncludes" render={renderError} />
                  <h3 className="text-xl text-1 mb-2 font-semibold leading-normal px-2 mt-6 w-full">
                    Tick All The Relevent Amenities
                  </h3>
                  <div className=" flex flex-wrap">{amenitiyList}</div>
                  <ErrorMessage name="amenities" render={renderError} />
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default AddNewListing;
