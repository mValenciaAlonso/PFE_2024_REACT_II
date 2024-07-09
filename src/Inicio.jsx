
import react , {useState} from "react";
import {Col} from "reactstrap";
import ContenidoInicioFragment from "./fragments/ContenidoInicioFragment.jsx";

/*Vista*/
function Inicio() {
    return (
        <>
            <Col md="12" xs="12">
                {/* Añadir una card pero como fragmento */}
                {/* ContenidoInicioFragment.jsx */}
                <ContenidoInicioFragment />
            </Col>
        </>
    )
}

/*exportacion*/
export default Inicio