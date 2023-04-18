import React from 'react';
import Sidebar from './Sidebar';
function Ajustes() {

    return(

        <React.Fragment>
            <Sidebar modulo="clientes"/>
            <div className='container-fluid'>
                <div className='pb-2'>
                    <i className="bi bi-gear fs-4"></i>
                    <span className='fs-4'>Ajustes</span>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Ajustes