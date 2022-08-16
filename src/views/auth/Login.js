import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "components/Modal/Modal";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const validationSchema = Yup.object({
    password: Yup.string().required(),
    email: Yup.string().email().required(),
  });
  const renderError = (message) => (
    <p className="help is-danger text-red-500">{message}</p>
  );

  const initialValues = {
    password: "",
    email: "",
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
              <div className="w-full md:w-5/12">
                <div className="flex content-center items-center justify-center h-full">
                  <img
                    alt="..."
                    className="w-56"
                    src={require("../../../src/assets/img/Logo.svg").default}
                  />
                </div>
                {/* <div className="flex content-center items-center justify-center h-full mt-9"> */}
                <div className="w-full   px-4 mt-8 ">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-2xl rounded-2xl ">
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0 font-style rounded-xl">
                      <div className=" text-center mb-6 mt-10 font-style text-3xl font-semibold">
                        <small className="text-1">Login to your account</small>
                      </div>
                      <div className="mb-4">
                        <div className=" text-center  ">
                          {/* <input
                            type="text"
                            className="w-full input-background  text-sm "
                            placeholder="Email"
                          /> */}
                          <Field
                            name="email"
                            type="email"
                            className="w-full input-background  text-sm"
                            placeholder="Email"
                          />
                        </div>
                        <ErrorMessage name="email" render={renderError} />
                      </div>

                      <div className="relative flex w-full flex-wrap items-stretch mb-3">
                        {/* <input
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            className="w-full input-background  text-sm "
                          /> */}
                        <Field
                          name="password"
                          type={showPass ? "text" : "password"}
                          className="w-full input-background  text-sm"
                          placeholder="Password"
                        />
                        <ErrorMessage name="password" render={renderError} />
                        <span
                          onClick={() => setShowPass(!showPass)}
                          className="z-10 h-full font-normal absolute text-center text-1  bg-transparent rounded text-2xl items-center justify-center w-12 right-0 pr-12 py-6"
                        >
                          <i
                            className={
                              showPass ? "fas fa-unlock" : "fas fa-lock"
                            }
                          ></i>
                        </span>
                      </div>
                      <div className="text-center mt-6">
                        <button
                          className="w-full button-background-green text-white text-base	 font-bold    mb-1  "
                          type="submit"
                          // onClick={() => setShowModal(!showModal)}
                        >
                          Log In
                        </button>
                      </div>
                      {/* {showModal && <Modal />} */}
                      <div className="flex justify-end   relative">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <small className="text-1 font-semibold text-right">
                            Forgot password?
                          </small>
                        </a>
                      </div>
                      <div className="w-full text-center mt-20">
                        <button
                          className="w-full pt-0 input-background h-16  font-bold mb-1 leading-none   pb-0 text-3 "
                          type="button"
                        >
                          Apply for an Account
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
