import React from 'react';
import Sidebar from './Sidebar';
import '../assetss/css/Inicio.css'
import '../assetss/css/App.css'

function Inicio() {

    return (
        <React.Fragment>
            <Sidebar modulo="inicio"></Sidebar>
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
        </React.Fragment>
    );
}

export default Inicio;