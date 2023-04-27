import React from 'react';
import Sidebar from './Header/Sidebar';
function Usuarios() {

    return(
        <React.Fragment>
            <Sidebar modulo="usuarios"/>
            <div className='container container-modulos'>
                <div className='pb-2'>
                    <i className="bi bi-person-gear fs-4"></i>
                    <span className='fs-4'>Usuarios</span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Usuarios