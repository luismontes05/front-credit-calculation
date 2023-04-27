import React from 'react';
import Sidebar from './Header/Sidebar';
function Ajustes() {

    return(

        <React.Fragment>
            <Sidebar modulo="ajustes"/>
            <div className='container container-modulos'>
                <div className='pb-2'>
                    <i className="bi bi-gear fs-4"></i>
                    <span className='fs-4'>Ajustes</span>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Ajustes