import React, { useState } from 'react'
import { FormContainer, Container, Button, Input } from './StyledComponents.js'
import MensajeRegistrado from './MensajeRegistrado.jsx';
const logo = "./src/assets/correo-de-contacto.png";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [mostrar, setMostrar] = useState(false)

  const validateForm = () => {
    let formErrors = {};
    if (!nombre || nombre.length < 3) {
      formErrors.nombre = "Por favor chequea que la información sea correcta";
    } else if (!apellido || apellido.length < 3) {
      formErrors.apellido = "Por favor chequea que la información sea correcta"
    } else if (!email) {
      formErrors.email = "Por favor chequea que la información sea correcta"
    } else if (!celular) {
      formErrors.celular = "Por favor chequea que la información sea correcta"
    } else if (!mensaje) {
      formErrors.mensaje = "Por favor chequea que la información sea correcta"
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }

  const handleInputBlur = () => {
    if (/^\s+/.test(nombre)) {
      setErrorMessage("El valor no debe comenzar con un espacio en blanco.");
      setNombre("")
    } else if (/^\s+/.test(apellido)) {
      setErrorMessage("El valor no debe comenzar con un espacio en blanco.");
      setApellido("")
    } else if (/^\s+/.test(mensaje)) {
      setErrorMessage("El valor no debe comenzar con un espacio en blanco.");
      setMensaje("")
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre }, { apellido }, { email }, { celular }, { mensaje });
    if (validateForm()) {
      setMostrar(true)
    }
  };

  return (
    <FormContainer from="contacto" >
      <div style={{ display: "flex"}}>
        <h1 style={{ display: "flex", fontFamily: "Georgia" }}>Contáctenos!</h1>
        <img src={logo} width={85} />
      </div>
      <form id="contacto-form" onSubmit={handleSubmit} >
        <div style={{display:"flex"}}>
        <Container>
          <label>Nombre</label>
          <div style={{ display: "flex" }}>
            <Input
              placeholder="Ingrese su nombre"
              type="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              onBlur={handleInputBlur}
            />
          </div>
        </Container>
        <Container>
          <label>Apellido</label>
          <div style={{ display: "flex" }}>
            <Input
              placeholder="Ingrese su apellido"
              type="lastname"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              onBlur={handleInputBlur}
            />
          </div>
        </Container>
        </div>
        <div style={{display:"flex"}}>
        <Container>
          <label>Email</label>
          <div style={{ display: "flex" }}>
            <Input
              placeholder="Ingrese su email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleInputBlur}
            />
          </div>
        </Container>
        <Container>
          <label>Celular</label>
          <div style={{ display: "flex" }}>
            <Input
              placeholder="8888 888888"
              type="tel"
              pattern="[0-9]{4} [0-9]{6}"
              value={celular}
              onChange={(e) => setCelular(e.target.value)}
            />
          </div>
        </Container>
        </div>
      </form>
      <Container className='textarea'>
        <label>Mensaje</label>
        <textarea
          rows="8"
          placeholder="Ingrese su mensaje"
          type="teaxtarea"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          onBlur={handleInputBlur}
        />
      </Container>
      <Container content="row">
        <Button form="contacto-form" btn="submit" >Enviar</Button>
      </Container>
      <div>
        {errors.nombre && <p style={{ color: "red", fontSize: "15px" }}>{errors.nombre}</p>}
        {errors.apellido && <p style={{ color: "red", fontSize: "15px" }}>{errors.apellido}</p>}
        {errors.email && <p style={{ color: "red", fontSize: "15px" }}>{errors.email}</p>}
        {errors.celular && <p style={{ color: "red", fontSize: "15px" }}>{errors.celular}</p>}
        {errors.mensaje && <p style={{ color: "red", fontSize: "15px" }}>{errors.mensaje}</p>}
        {errorMessage && <p style={{ color: "red", fontSize: "15px" }}>{errorMessage}</p>}
        {mostrar && <MensajeRegistrado nombre={nombre} email={email} />}
      </div>
    </FormContainer>
  )
}

export default Contacto