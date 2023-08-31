import React from "react";

const Alert = ({ color, mensaje }) => {
  //el color y el mansaje por prop
  return (
    <>
      <p className={color}>{mensaje}</p>
    </>
  );
};
export default Alert;
