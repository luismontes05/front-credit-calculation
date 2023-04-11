import React from 'react';
import Sidebar from './Sidebar';
import DataTableClient from './Clientes/DataTableClient';
import FormDataClient from './Clientes/FormDataClient';
import '../assetss/css/Clientes.css'
import '../assetss/css/App.css'
function Clientes() {

    return(

        <React.Fragment>
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col col-sidebar">
                        <Sidebar modulo="clientes"></Sidebar>
                    </div>
                    <div className="col col-modulo">
                        <header>
                            <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#ModalFormDataClient">Crear Nuevo Cliente</button>
                        </header>
                        <FormDataClient></FormDataClient>
                        <hr></hr>
                        <DataTableClient></DataTableClient>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Clientes