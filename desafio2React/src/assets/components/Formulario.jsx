import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

const Formulario = ({ setAlert }) => {
  const [datoFormulario, setDatoFormulario] = useState({
    nombre: "",
    email: "",
    contraseña: "",
    confirmeContraseña: "",
  });

  const validarFormulario = (e) => {
    e.preventDefault();

    const { nombre, email, contraseña, confirmeContraseña } = datoFormulario; //este es el estado inicial

    const checkInput = !nombre || !email || !contraseña || !confirmeContraseña; //esto gatilla la alerta

    const checkPassword = contraseña !== confirmeContraseña;

    checkInput
      ? setAlert({
          error: true,
          mensaje: "Complete todos los datos",
          color: "text-danger",
        })
      : setAlert({
          error: false,
          mensaje: "Cuenta creada exitosamente",
          color: "text-success",
        });

    if (checkPassword) {
      setAlert({
        error: true,
        mensaje: "Las contraseñas no coinciden",
        color: "text-danger",
      });
      return;
    }
    setDatoFormulario({
      nombre: "",
      email: "",
      contraseña: "",
      confirmeContraseña: "",
    });
  };

  const handleChange = (e) => {
    setDatoFormulario({
      ...datoFormulario,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form className="formulario" onSubmit={validarFormulario}>
        <div className="campos mb-4">
          <input
            type="text"
            name="nombre"
            className="subCampo"
            placeholder="Nombre"
            onChange={handleChange}
            value={datoFormulario.nombre}
          />
        </div>
        <div className="campos mb-4">
          <input
            type="email"
            name="email"
            className="subCampo"
            placeholder="E-mail"
            onChange={handleChange}
            value={datoFormulario.email}
          />
        </div>
        <div className="campos mb-4">
          <input
            type="password"
            name="contraseña"
            className="subCampo"
            placeholder="Contraseña"
            onChange={handleChange}
            value={datoFormulario.contraseña}
          />
        </div>
        <div className="campos mb-4">
          <input
            type="password"
            name="confirmeContraseña"
            className="subCampo"
            placeholder="Confirme su contraseña"
            onChange={handleChange}
            value={datoFormulario.confirmeContraseña}
          />
        </div>
        <div className="boton">
          <Button type="submit" className="btn btn-success">
            Registrarse
          </Button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
