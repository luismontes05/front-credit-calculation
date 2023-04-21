import React from 'react';
import Sidebar from './Sidebar';
import DataTableClient from './Clientes/DataTableClient';
import ModalNewClient from './Clientes/ModalNewClient';
import ViweClient from './Clientes/ViweClient';
import '../assetss/css/Clientes.css'
import '../assetss/css/App.css'
function Clientes() {

    return(

        <React.Fragment>
            <Sidebar modulo="clientes"/>
            <div className='container'>
                <div className='pb-2'>
                    <i className="bi bi-person-gear fs-4"></i>
                    <span className='fs-4'>Clientes</span>
                </div>
                <DataTableClient/>
                <ModalNewClient/>
            </div>
        </React.Fragment>
    );

}

export default Clientes