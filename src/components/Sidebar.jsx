import React, { useState } from "react";
import '../assetss/css/Sidebar.css'
import { useNavigate } from 'react-router-dom';

function Sidebar(props){

    const  token = localStorage.getItem("token")

    const navigate = useNavigate();  

    const handleNavigate = (modulo) => {
        if(token && token != null){
            navigate('/'+modulo)
        }else{
            navigate('/')
        }
    }
    
    const handleLogout = () => {
        localStorage.clear();
        navigate('/')
    }

    return(
        <React.Fragment>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark div_nav">
                <a href="/home" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4"> Menu Principal</span>
                </a>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className={props.modulo == 'inicio' ? 'nav-link active' : 'nav-link text-white' }  onClick={() => handleNavigate('inicio')}>
                            <i className="bi bi-house-door"></i>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={props.modulo == 'clientes' ? 'nav-link active' : 'nav-link text-white' } onClick={() => handleNavigate('clientes')}>
                            <i className="bi bi-person-gear"></i>
                            <span>Clientes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={props.modulo == 'creditos' ? 'nav-link active' : 'nav-link text-white' } onClick={() => handleNavigate('creditos')}>
                            <i className="bi bi-cash-coin"></i>
                            <span>Creditos</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={props.modulo == 'informes' ? 'nav-link active' : 'nav-link text-white' } onClick={() => handleNavigate('informes')}>
                            <i className="bi bi-bar-chart-line"></i>
                            <span>Informes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={props.modulo == 'ajustes' ? 'nav-link active' : 'nav-link text-white' } onClick={() => handleNavigate('ajustes')}>
                            <i className="bi bi-gear"></i>
                            <span>Ajustes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className={props.modulo == 'usuarios' ? 'nav-link active' : 'nav-link text-white' } onClick={() => handleNavigate('usuarios')}>
                            <i className="bi bi-person-gear"></i>
                            <span>Usuarios</span>
                        </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown footer_sidebar">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-person-circle"></i>
                        <strong>Perfil</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">Ajustes de usuario</a></li>
                        <li><a className="dropdown-item" href="#">Cambiar Contraseña</a></li>
                        <li><a className="dropdown-item" href="#" onClick={handleLogout}>Cerrar Sesion <i className="bi bi-power"></i></a></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
    
}

export default Sidebar