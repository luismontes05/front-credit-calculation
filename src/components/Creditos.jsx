import React from 'react';
import Sidebar from './Sidebar';
function Creditos() {

    return(
        <React.Fragment>
            <Sidebar modulo="clientes"/>
            <div className='container-fluid'>
                <div className='pb-2'>
                    <i className="bi bi-cash-coin fs-4"></i>
                    <span className='fs-4'>Creditos</span>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Creditos