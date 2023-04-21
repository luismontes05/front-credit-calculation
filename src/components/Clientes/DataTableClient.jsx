import React, { useState, useEffect } from 'react';
import { alerta } from "../../services/utilities";
import { dataClient } from "../../services/Client"
import  avatar_gril from  "../../assetss/img/avatar_gril.png"
import  avatar_men from  "../../assetss/img/avatar_men.png"
import ViweClient from './ViweClient';

function DataTableClient() {

    const [listClient, setListClient] = useState([]);
    const [filter, setFilter] = useState('');
    const [idClient, setIdClient] = useState(false)
    
    useEffect(() => {
        
        dataClient().then(response => {
            if(response.status === 200){
                setListClient(response.data);
            }else{
                alerta('Error al cargar la lista de clientes', response.message)
            }
        }).catch(error =>{
            alerta('Error al cargar la lista de clientes', error.message)
        })
    }, []);

    const filteredData = listClient.filter((item) => {
        return item.full_name.toLowerCase().includes(filter.toLowerCase());
      });



    return (
        <React.Fragment>
            
            <div className='row mb-3'>
                <div className='col-sm-3'>
                    <div className="input-group">
                        <input type="text" className="form-control form-control-sm" placeholder="Buscar..." aria-label="Buscar" aria-describedby="basic-addon1" value={filter}
                        onChange={(e) => setFilter(e.target.value)} />
                    </div>
                </div>
                <div className='col-sm-9 text-end'>
                    <button className="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#ModalFormDataClient">Nuevo Cliente</button>
                </div>
            </div>

            <div className='table-container'>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th></th>
                            <th>Nombre</th>
                            <th># Documento</th>
                            <th>Email</th>
                            <th>Telefono 1</th>
                            <th>Fecha de actulizacion</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((client, index) => (
                            <tr key={index}>
                                <td>{client.id}</td>
                                <td>
                                    <img width="35" class="rounded-circle" src={client.sex == 'MASCULINO'? avatar_men : avatar_gril } alt="" />
                                </td>
                                <td>{client.full_name}</td>
                                <td>{client.type_document} {client.num_document}</td>
                                <td>{client.email}</td>
                                <td>{client.telephone_number_1}</td>
                                <td>{client.last_update}</td>
                                <td>{client.status ? <span class="badge text-bg-success">Activo</span> : <span class="badge text-bg-danger">Inactivo</span>}
                                </td>
                                <td>
                                    <a  href="#" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#ModalViweClient" 
                                        class="link-info icon-link-hover link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" 
                                        title="Ver informacion del cliente"
                                        onClick={() => setIdClient(client.id)}
                                    >
                                        <i class="bi bi-eye"></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ViweClient idClient={idClient}/>
        </React.Fragment>
    );
  }
  
  export default DataTableClient;