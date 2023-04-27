import React from 'react';
import Sidebar from './Header/Sidebar';
import '../assetss/css/Inicio.css'
import '../assetss/css/App.css'

function Inicio() {

    return (
        <React.Fragment>
            <Sidebar modulo="inicio"></Sidebar>
            <div className='container container-modulos'>
                
            </div>
        </React.Fragment>
    );
}

export default Inicio;