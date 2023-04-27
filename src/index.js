import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from './reducers/index'
import './assetss/css/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';

// Se crea un elemento de la propiedad ReacDOMM obteniendo el contenedor donde se va renderizar 
// toda la aplicacion, en este caso el <div id="root"> que esta en el archivo index.html de la 
// carpeta public.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Se ejecuta la funcion render del objetro creado anteriormente y se le pasada <React.StrictMode> que es una
// Etiqueta propia de REACT pero podria ser un <div> o cualquier contendero y dentro se pasa el componente <APP />
// que contiene nuestros componentes principales o inicio de la aplicacion



const initialState = {
  "dataClients": []
}

const store = createStore(reducer, initialState)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


