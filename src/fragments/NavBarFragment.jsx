/* core */
import React from 'react'
import {Col, Nav, NavItem, NavLink} from "reactstrap";



/* component: view */
// eslint-disable-next-line react/prop-types
function NavBarFragment({ setMenu, handleChangeMenuDestacado }) {

    return (
        <Col md="12" xs="12">
            <Nav pills className="mt-2">
                <NavItem>
                    {/*Cambio de valor de estado por funcion anonima*/}
                    <NavLink   href="#" onClick={() => setMenu('inicio')} >
                        Inicio
                    </NavLink>
                </NavItem>
                <NavItem>
                    {/*Cambio de valor de estado por funcion normal*/}
                    <NavLink href="#" onClick={handleChangeMenuDestacado}>
                        Destacado
                    </NavLink>
                </NavItem>
                <NavItem>
                    {/*Cambio de valor de estado por funcion anonima*/}
                    <NavLink   href="#" onClick={() => setMenu('acerca')} >
                        Acerca de
                    </NavLink>
                </NavItem>
            </Nav>
        </Col>

    )
}

/* exportación */
export default NavBarFragment