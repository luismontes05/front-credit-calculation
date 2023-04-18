import React, { useState } from "react";
import '../assetss/css/Sidebar.css'
import { useNavigate } from 'react-router-dom';
import Logo from '../assetss/img/logocreditos.png'

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
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="hstack gap-3">
                    <div className="text-center">
                        <p className="text-white fs-6 m-0"><b>Capital Disponible</b></p>
                        <span className="badge text-bg-success fs-6">$10.000.000</span>
                    </div>
                    <div className="vr bg-white"></div>
                    <div className="text-center">
                        <p className="text-white fs-6 m-0"><b>Capital en Prestamo</b></p>
                        <span className="badge text-bg-secondary fs-6">$10.000.000</span>
                    </div>
                    <div className="vr bg-white"></div>
                    <div className="text-center">
                        <p className="text-white fs-6 m-0"><b>Intereses Generados</b></p>
                        <span className="badge text-bg-primary fs-6">$10.000.000</span>
                    </div>
                </div>

            
                <div className="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title pt-2" id="offcanvasDarkNavbarLabel">Menu Principal</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <hr></hr>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a href="#" className={props.modulo == 'inicio' ? 'nav-link active' : 'nav-link text-white' }  onClick={() => handleNavigate('inicio')}>
                                    <i className="bi bi-house-door"></i>
                                    <span>Inicio</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className={props.modulo == 'clientes' ? 'nav-link active' : 'nav-link text-white' } onClick={() => handleNavigate('clientes')}>
                                    <i className="bi bi-person-gear"></i>
                                    <span>Clientes</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className={props.modulo == 'creditos' ? 'nav-link active' : 'nav-link text-white' } onClick={() => handleNavigate('creditos')}>
                                    <i className="bi bi-cash-coin"></i>
                                    <span>Creditos</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className={props.modulo == 'informes' ? 'nav-link active' : 'nav-link text-white' } onClick={() => handleNavigate('informes')}>
                                    <i className="bi bi-bar-chart-line"></i>
                                    <span>Informes</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className={props.modulo == 'ajustes' ? 'nav-link active' : 'nav-link text-white' } onClick={() => handleNavigate('ajustes')}>
                                    <i className="bi bi-gear"></i>
                                    <span>Ajustes</span>
                                </a>
                            </li>
                            <li className="nav-item">
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
                </div>
            </div>
        </nav>
    )
    
}

export default Sidebar