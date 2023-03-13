import React from "react";

const MensajeRegistrado = (props) => {

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            textAlign:"center",
            border: "5px solid turquoise",
            }}>
            <h2 style={{fontFamily: "Roboto"}}> Hola <spam style={{color:"red"}}>{props.nombre}</spam>, hemos registrado su respuesta</h2>
            <p style={{fontFamily: "Roboto"}}> Nos estaremos comunicando a su email: <spam style={{color:"red"}}>{props.email}</spam></p>
        </div>
    )
}

export default MensajeRegistrado