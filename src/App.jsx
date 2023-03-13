import React, {useState} from "react"
import Contacto from "./form/Contacto.jsx"
import { Container } from "./form/StyledComponents"

function App() {
  return (
    <div className="App">
      <Container className="App" content="evenly">
        <Contacto />
      </Container>
    </div>
  )
}

export default App
