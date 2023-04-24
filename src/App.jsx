import React  from "react";
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Inicio from './components/Inicio';
import Clientes from './components/Clientes/Clientes';
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
          <Route key="inicio" path='/inicio' exact element={ <Inicio modulo="inicio" />}></Route>
          <Route key="clientes" path='/clientes' exact element={<Clientes modulo="clientes" />}></Route>
          <Route key="creditos" path='/creditos' exact element={<Creditos modulo="creditos" />}></Route>
          <Route key="informes" path='/informes' exact element={<Informes modulo="informes" />}></Route>
          <Route key="ajustes" path='/ajustes' exact element={<Ajustes modulo="ajustes" />}></Route>
          <Route key="usuarios" path='/usuarios' exact element={<Usuarios modulo="Usuarios" />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
