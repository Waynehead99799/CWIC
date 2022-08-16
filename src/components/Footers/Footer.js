import React from "react";

export default function Footer(props) {
  return (
    <>
      <footer
        className={
          (props.absolute ? "absolute w-full bottom-0" : "relative") +
          " pb-6 py-4"
        }
      >
        <div className=" mx-auto ">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="text-sm opacity-50 text-3 font-semibold py-1 justify-center text-center ">
            ©2021 CWIC App
          </div>
        </div>
      </footer>
    </>
  );
}
