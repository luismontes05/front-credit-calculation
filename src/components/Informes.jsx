import React from 'react';
import Sidebar from './Sidebar';
function Informes() {

    return(

        <React.Fragment>
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col col-sidebar">
                        <Sidebar modulo="informes"></Sidebar>
                    </div>
                    <div className="col col-modulo">
                        contenido de informes
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Informes