import React from 'react';
import Sidebar from './Sidebar';
import '../assetss/css/Inicio.css'
import '../assetss/css/App.css'

function Inicio(props) {

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col col-sidebar">
                        <Sidebar modulo="inicio"></Sidebar>
                    </div>
                    <div className="col col-modulo">
                        contenido
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Inicio;