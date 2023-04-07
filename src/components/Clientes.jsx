import React from 'react';
import Sidebar from './Sidebar';
function Clientes() {

    return(

        <React.Fragment>
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col col-sidebar">
                        <Sidebar modulo="clientes"></Sidebar>
                    </div>
                    <div className="col col-modulo">
                        contenido de clientes
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Clientes