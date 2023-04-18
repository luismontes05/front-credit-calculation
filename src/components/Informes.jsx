import React from 'react';
import Sidebar from './Sidebar';
function Informes() {

    return(

        <React.Fragment>
            <Sidebar modulo="clientes"/>
            <div className='container-fluid'>
                <div className='pb-2'>
                    <i className="bi bi-bar-chart-line fs-4"></i>
                    <span className='fs-4'>Informes</span>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Informes