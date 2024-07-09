
import react , {useState} from "react";
import {Col} from "reactstrap";
import AcercaFragment from "./fragments/AcercaFragment.jsx";

/*Vista*/
function acerca() {
    return (
        <>
                {/* Añadir una card pero como fragmento */}
                {/* ContenidoInicioFragment.jsx */}
                <AcercaFragment/>

        </>
    )
}

/*exportacion*/
export default acerca