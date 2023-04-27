import React, { useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../../assetss/css/Sidebar.css'
import Saldos from "./Saldos";
import UserOptions from "./UserOptions";
import logospace from "../../assetss/img/logospace2.png"
import { useNavigate } from 'react-router-dom';


function Sidebar(props){

    const  token = localStorage.getItem("token")
    const navigate = useNavigate();

    useEffect( () =>{
        if(token === null){
            navigate('/');
        }
    },[])

    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" className="pe-4 ps-4">
            <Navbar.Brand>
                <Link to="/inicio" className={props.modulo == 'inicio' ? 'nav-link text-white' : 'nav-link' }>
                    <img width="45" className="" src={logospace} />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <ul className="navbar-nav justify-content-end flex-grow-1">
                    <li className="nav-item ps-2 fs-5">
                        <Link to="/inicio" className={props.modulo == 'inicio' ? 'nav-link text-white' : 'nav-link' }>
                                <span>Inicio</span>
                        </Link>
                    </li>
                    <li className="nav-item ps-2 fs-5">
                        <Link to="/clientes"  className={props.modulo == 'clientes' ? 'nav-link text-white' : 'nav-link' }>
                            <span>Clientes</span>
                        </Link>
                    </li>
                    <li className="nav-item ps-2 fs-5">
                        <Link to="/creditos"  className={props.modulo == 'creditos' ? 'nav-link text-white' : 'nav-link' }>
                            <span>Creditos</span>
                        </Link>
                    </li>
                    <li className="nav-item ps-2 fs-5">
                        <Link to="/informes"  className={props.modulo == 'informes' ? 'nav-link text-white' : 'nav-link' }>
                            <span>Informes</span>
                        </Link>
                    </li>
                    <li className="nav-item ps-2 fs-5">
                        <Link to="/usuarios"  className={props.modulo == 'usuarios' ? 'nav-link text-white' : 'nav-link' }>
                            <span>Usuarios</span>
                        </Link>
                    </li>
                    <li className="nav-item ps-2 fs-5">
                        <Link to="/ajustes"  className={props.modulo == 'ajustes' ? 'nav-link text-white' : 'nav-link' }>
                            <span>Ajustes</span>
                        </Link>
                    </li>
                </ul>
            </Nav>
            <Nav>
                <Saldos></Saldos>
            </Nav>
            <Nav>
                <UserOptions></UserOptions>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Sidebar