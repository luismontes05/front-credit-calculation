import React from 'react';
import Sidebar from './Sidebar';
function Usuarios() {

    return(

        <React.Fragment>
            <Sidebar modulo="clientes"/>
            <div className='container-fluid'>
                <div className='pb-2'>
                    <i className="bi bi-person-gear fs-4"></i>
                    <span className='fs-4'>Usuarios</span>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Usuarios