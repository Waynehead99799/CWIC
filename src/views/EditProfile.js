import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

// const agentName = "George Henson";
// const agentEmail = "Gorge@mail.com";
// const agencyName = "War";
// const aboutAgency = "War";

export default function EditProfile() {
  const [profileImg, setProfileImg] = useState();
  const [formData, setFormData] = useState({
    agentName: "george hanigton",
    agentEmail: "gorge@gamil.com",
    agencyName: "wear",
    aboutAgency: "waer",
  });

  const validationSchema = Yup.object({
    agentName: Yup.string().required("Agent name should not be empty"),
    agentEmail: Yup.string()
      .email()
      .required("Agent email should not be empty"),
    agencyName: Yup.string().required("Agency name should not be empty"),
    aboutAgency: Yup.string().required("write somthing about your agency"),
  });

  const initialValues = {
    agentName: formData.agentName,
    agentEmail: formData.agentEmail,
    agencyName: formData.agencyName,
    aboutAgency: formData.aboutAgency,
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const renderError = (message) => (
    <p className="help is-danger text-red-500">{message}</p>
  );

  const upadteProfileHandler = (event) => {
    setProfileImg(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div>
      <div className=" flex content-center mt-20 items-center justify-center h-full px-4">
        <div className=" container w-full md:w-4/12 lg:w-3/12 px-4 ">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-2xl ">
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 font-style rounded-xl">
              <div className="  mb-6 mt-10 font-style text-2xl font-semibold">
                <small className="text-1">Your Profile</small>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                  onSubmit(values);
                  // resetForm();
                  setFormData(values);
                }}
              >
                <Form>
                  <div className="w-full  h-130px   mb-4  items-center flex justify-center">
                    <label
                      htmlFor="upload-button"
                      className="shadow-xl w-130 sm:w-4/12  border-none bg-3 rounded-full h-full justify-center "
                    >
                      {profileImg && (
                        <img
                          src={profileImg}
                          alt="..."
                          width="100%"
                          height="100%"
                          className="shadow rounded-full h-full  align-middle border-none"
                        />
                      )}
                    </label>
                    <input
                      type="file"
                      id="upload-button"
                      style={{ display: "none" }}
                      onChange={upadteProfileHandler}
                    />
                  </div>
                  <div className=" text-center mb-4">
                    <Field
                      name="agentName"
                      type="text"
                      className="w-full input-background  text-sm  "
                      placeholder="Name"
                    />
                    <ErrorMessage name="agentName" render={renderError} />
                  </div>
                  <div className=" text-center mb-4">
                    <Field
                      name="agentEmail"
                      type="email"
                      className="w-full input-background  text-sm  "
                      placeholder="Agent email"
                    />
                    <ErrorMessage name="agentEmail" render={renderError} />
                  </div>
                  <div className=" text-center mb-4">
                    <Field
                      name="agencyName"
                      type="text"
                      className="w-full input-background  text-sm  "
                      placeholder="Agency name"
                    />
                    <ErrorMessage name="agencyName" render={renderError} />
                  </div>
                  <div className=" text-center mb-4">
                    <Field
                      name="aboutAgency"
                      type="text"
                      className="w-full input-background  text-sm  "
                      placeholder="About agency"
                    />
                    <ErrorMessage name="aboutAgency" render={renderError} />
                  </div>
                  <div className=" w-full text-center mt-6">
                    <button
                      className="w-full button-background-green text-white text-base	 font-bold  hover:shadow-md      mb-1  "
                      type="submit"
                      // onSubmit={onSubmit}
                    >
                      Update Profile
                    </button>
                  </div>
                  <div className=" w-full text-center mt-4">
                    <Link to={"/profile/EditProfile/ChangePassword"}>
                      <button
                        className="w-full button-background-green text-white text-base hover:shadow-md	 font-bold    mb-1  "
                        type="button"
                      >
                        Change Password
                      </button>
                    </Link>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
