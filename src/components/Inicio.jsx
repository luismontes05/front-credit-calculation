import React from 'react';
import Sidebar from './Sidebar';
import '../assetss/css/Inicio.css'
import '../assetss/css/App.css'

function Inicio(props) {

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col col-sidebar">
                        <Sidebar modulo="inicio"></Sidebar>
                    </div>
                    <div className="col col-modulo">

                        <header className='header-card-saldos'>
                         
                            <div className="alert alert-success card-saldo" role="alert">
                                <h4>Capital Disponible</h4>
                                <hr/>
                                <h5>$100.000.000</h5>
                            </div>
                            <div className="alert alert-primary card-saldo" role="alert">
                                <h4>Capital en Prestamo</h4>
                                <hr/>
                                <h5>$100.000.000</h5>
                            </div>
                            <div className="alert alert-warning card-saldo" role="alert">
                                <h4>Intereses Generados</h4>
                                <hr/>
                                <h5>$100.000.000</h5>
                            </div>
                        </header>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Inicio;