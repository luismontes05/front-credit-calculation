import React from 'react';
import Sidebar from './Sidebar';
function Usuarios() {

    return(

        <React.Fragment>
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col col-sidebar">
                        <Sidebar modulo="usuarios"></Sidebar>
                    </div>
                    <div className="col col-modulo">
                        contenido de usuarios
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Usuarios