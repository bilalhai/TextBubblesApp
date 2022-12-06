import React, { useState } from "react";

function Alert(props) {
  // const capitalize = (word) => {
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // };
  return (
    <>
      {/* !!enabling the dark mode and showing message and its type to change the alert color box */}

      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{props.alert.msg}</strong>

        {/* {/* <strong>{capitalize(props.alert.type)} : </strong> */}
        {/* {capitalize(props.alert.message)} */}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
}

export default Alert;
