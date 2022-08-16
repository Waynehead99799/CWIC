import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function ChangePassword() {
  const [showPassOld, setShowPassOld] = useState(false);
  const [showPassNew, setShowPassNew] = useState(false);
  const [showPassCfm, setShowPassCfm] = useState(false);

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required(),
    newPassword: Yup.string()
      .required()
      .when("oldPassword", {
        is: (val) => val === "newPassword",
        then: Yup.string().oneOf(
          [Yup.ref("newPassword")],
          "Both password need to be the same"
        ),
      }),
    confirmPassword: Yup.string()
      .required()
      .when("newPassword", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("newPassword")],
          "Both password need to be the same"
        ),
      }),
  });
  const renderError = (message) => (
    <p className="help is-danger text-red-500">{message}</p>
  );

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <div className="container mx-auto px-4 h-full mt-8">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full md:w-4/12">
                {/* <div className="flex content-center items-center justify-center h-full mt-9"> */}
                <div className="w-full   px-4 mt-8 ">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-2xl ">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0 font-style rounded-xl">
                      <div className=" text-center mb-6 mt-10 font-style text-3xl font-semibold">
                        <small className="text-1">Change Password</small>
                      </div>

                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <Field
                          name="oldPassword"
                          type={showPassOld ? "text" : "password"}
                          className="w-full input-background  text-sm"
                          placeholder="Old Password"
                        />
                        <ErrorMessage name="oldPassword" render={renderError} />
                        <span
                          onClick={() => setShowPassOld(!showPassOld)}
                          className="z-10 h-full font-normal absolute text-center text-1  bg-transparent rounded text-2xl items-center justify-center w-12 right-0 pr-12 py-6"
                        >
                          <i
                            className={
                              showPassOld ? "fas fa-unlock" : "fas fa-lock"
                            }
                          ></i>
                        </span>
                      </div>
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        <Field
                          name="newPassword"
                          type={showPassNew ? "text" : "password"}
                          className="w-full input-background  text-sm"
                          placeholder="New Password"
                        />
                        <ErrorMessage name="newPassword" render={renderError} />
                        <span
                          onClick={() => setShowPassNew(!showPassNew)}
                          className="z-10 h-full font-normal absolute text-center text-1  bg-transparent rounded text-2xl items-center justify-center w-12 right-0 pr-12 py-6"
                        >
                          <i
                            className={
                              showPassNew ? "fas fa-unlock" : "fas fa-lock"
                            }
                          ></i>
                        </span>
                      </div>
                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        {/* <input
                        type={showPass ? "text" : "password"}
                        placeholder="Password"
                        className="w-full input-background  text-sm "
                      /> */}
                        <Field
                          name="confirmPassword"
                          type={showPassCfm ? "text" : "password"}
                          className="w-full input-background  text-sm"
                          placeholder="Confirm Password"
                        />
                        <ErrorMessage
                          name="confirmPassword"
                          render={renderError}
                        />
                        <span
                          onClick={() => setShowPassCfm(!showPassCfm)}
                          className="z-10 h-full font-normal absolute text-center text-1  bg-transparent rounded text-2xl items-center justify-center w-12 right-0 pr-12 py-6"
                        >
                          <i
                            className={
                              showPassCfm ? "fas fa-unlock" : "fas fa-lock"
                            }
                          ></i>
                        </span>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="w-full button-background-green text-white text-base	 font-bold    mb-1  "
                          type="submit"
                        >
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
