import React from 'react';
import Sidebar from './Sidebar';
function Creditos() {

    return(

        <React.Fragment>
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col col-sidebar">
                        <Sidebar modulo="creditos"></Sidebar>
                    </div>
                    <div className="col col-modulo">
                        contenido de creditos
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Creditos