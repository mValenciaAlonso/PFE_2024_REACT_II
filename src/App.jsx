


/* core */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
  Container,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row
} from "reactstrap"

/* importaciones */
import Inicio from "./Inicio.jsx";
import Destacados from "./Destacados.jsx";
import Acerca from "./Acerca.jsx";
import NavBarFragment from "./fragments/NavBarFragment.jsx";

/* component: view */
function App() {
   const [menu, setMenu] = useState('inicio') //inicio- destacados

  const handleChangeMenuDestacado = () => {
     setMenu('destacados')
  }
  return (
    <>
        <Container>
        <Row>
        <NavBarFragment
            handleChangeMenuDestacado={handleChangeMenuDestacado}
            setMenu={setMenu}
        />
        </Row>
          <Row className="mt-2">
            {menu === 'inicio' && <>
              <Inicio/>
            </>}
            {menu === 'destacados' && <>
              <Destacados/>
            </>}
            {menu === 'acerca' && <>
              <Acerca/>
            </>}

          </Row>
        </Container>
    </>
  )
}

export default App
