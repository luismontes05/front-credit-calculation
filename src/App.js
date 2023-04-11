import React, {useEffect} from "react";
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Clientes from './components/Clientes';
import Creditos from './components/Creditos';
import Informes from './components/Informes';
import Ajustes from './components/Ajustes';
import Usuarios from './components/Usuarios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login/>}></Route>
          <Route path='/inicio' exact element={ true ? <Inicio modulo="inicio" /> : <Login/> }></Route>
          <Route path='/clientes' exact element={ true ? <Clientes modulo="clientes" /> : <Login/> }></Route>
          <Route path='/creditos' exact element={ true ? <Creditos modulo="creditos" /> : <Login/> }></Route>
          <Route path='/informes' exact element={ true ? <Informes modulo="informes" /> : <Login/> }></Route>
          <Route path='/ajustes' exact element={ true ?  <Ajustes modulo="ajustes" /> : <Login/> }></Route>
          <Route path='/usuarios' exact element={ true ? <Usuarios modulo="Usuarios" /> : <Login/> }></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
