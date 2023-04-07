import React from 'react';
import Sidebar from './Sidebar';
function Ajustes() {

    return(

        <React.Fragment>
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col col-sidebar">
                        <Sidebar modulo="ajustes"></Sidebar>
                    </div>
                    <div className="col col-modulo">
                        contenido de ajustes
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Ajustes