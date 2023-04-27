import React from "react";
import  avatar_default from  "../../assetss/img/logo_aliens.png"
import Swal  from 'sweetalert2';

function UserOptions(){

    const handleLogout = () => {

        Swal.fire({
            icon: 'question',
            html: '<p style="font-size:16px"><b>Cerrar Sesion</b><br>¿Seguro desea salir?</p>',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: '<span style="font-size:16px"><strong>Aceptar</strong></span>',
            cancelButtonText: '<span style="font-size:16px"><strong>Cancelar</strong></span>',
            width: 350,
            height:250
        }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear();
                    window.location.href = '/';
                }
        })
    }
    
    return(
        <React.Fragment>
           
           <div className="dropdown pt-2">
    
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img height="22" className="rounded-circle" src={avatar_default} />
                    <span className="text-white ps-1">Perfil</span>
                    <i className="bi bi-caret-down-fill text-white ps-2"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Ajustes de usuario</a></li>
                    <li><a className="dropdown-item" href="#">Cambiar Contraseña</a></li>
                    <li><a className="dropdown-item" href="#" onClick={handleLogout}>Cerrar Sesion <i className="bi bi-power"></i></a></li>
                </ul>
            </div>

        </React.Fragment>
    )
}

export default UserOptions ;