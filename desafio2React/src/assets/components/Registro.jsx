import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import Alert from "./Alert";
import React, { useState } from "react";

const Registro = () => {
  const [alert, setAlert] = useState({
    error: "",
    mensaje: "",
    color: "",
  });
  return (
    <>
      <section className="box border border-dark p-4  rounded">
        <h2>Crea una cuenta</h2>
        <SocialButton icon1="facebook" icon2="github" icon3="linkedin" />
        <h6>O usa tu email para registrarte</h6>
        <Formulario setAlert={setAlert} />
        {alert.mensaje && <Alert color={alert.color} mensaje={alert.mensaje} />}
      </section>
    </>
  );
};

export default Registro;
