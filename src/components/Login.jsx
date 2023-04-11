import React, { useState, useEffect } from "react";
import '../assetss/css/Login.css'
import Logo from '../assetss/img/logocreditos.png'
import Imglateral from '../assetss/img/img_login.jpg'
import { Apiulr } from "../services/apirest";
import { validateEmail } from "../services/validate";
import  axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

    useEffect(() => {
        localStorage.clear();
      }, []);

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [error_message, setErrorMessage] = useState('');
    const [disabled_botton, setDsiabledBotton] = useState(false)

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {

        if(!validateEmail(username)){
            setError(true)
            setErrorMessage('Debe digitar una cuenta de correo valida');
            return;
        }else if(password.length < 1 ){
            setError(true)
            setErrorMessage('Por favor digite una contraseña');
            return;
        }else{
            setError(false);
        }

        setDsiabledBotton(true)

        let url = Apiulr + 'login?email=' + username +'&password=' + password
        axios.get(url)
        .then( response => {
            if(response.status === 200){
                setError(false)
                setErrorMessage('')
                localStorage.setItem("token", response.data.token)
                navigate('/inicio');
            }else{
                setError(true)
                setErrorMessage(response.data.message)
            }

        }).catch( error =>{
            setError(true);
            if( error.response?.data){
                setErrorMessage(error.response.data.message ?? error.response.data.detail);
            }else{
                setErrorMessage(error.message);
            }
        }).finally( () => {
            setDsiabledBotton(false)
        } )
    }

    return (
        <React.Fragment>
            <section className="vh-100 bg-dark">
                <div className="container py-4 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card div-card">
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src={Imglateral} alt="login form" className="img-fluid img-login" />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black card-body-form">
                                            <form>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <img src={Logo} id="icon" alt="Logo" width={150} />
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-2 h5-text">Iniciar sesión en su cuenta</h5>

                                                <div className="form-floating mb-3">
                                                    <input type="email" id="usuario" name="usuario" placeholder="Usuario" className="form-control form-control-lg" value={username} onChange={handleUsernameChange} />
                                                    <label className="form-label" htmlFor="usuario">Email address</label>
                                                </div>

                                                <div className="form-floating mb-3">
                                                    <input type="password" id="password" name="password" className="form-control form-control-lg" placeholder="Password" value={password} onChange={handlePasswordChange} />
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="button" disabled={disabled_botton} onClick={handleLogin}>Login</button>
                                                    {disabled_botton &&
                                                        <div className="spinner-border spinner-login">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    }
                                                </div>
                                                <a className="small text-muted" href="#!">Olvidaste tu contraseña?</a>
                                                <br/>
                                                <a href="#!" className="small text-muted">Termios y condiciones</a>
                                                {error &&
                                                    <div className="alert alert-danger d-flex align-items-center alert-login" role="alert">
                                                        <i className="bi bi-x-circle"></i>
                                                        <div>
                                                            {error_message}
                                                        </div>
                                                    </div>
                                                }
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Login