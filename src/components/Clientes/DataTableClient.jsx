import React, { useState, useEffect } from 'react';
import { alerta } from "../../services/utilities";
import { dataClient } from "../../services/Client"
import  avatar_gril from  "../../assetss/img/avatar_gril.png"
import  avatar_men from  "../../assetss/img/avatar_men.png"

function DataTableClient() {

    const [listClient, setListClient] = useState([]);
    const [filter, setFilter] = useState('');
    
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
            
            <div className='row'>
                <div className='col-sm-2'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Buscar..." aria-label="Buscar" aria-describedby="basic-addon1" value={filter}
                        onChange={(e) => setFilter(e.target.value)} />
                    </div>
                </div>
                <div className='col-sm-10 text-end'>
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
                                    >
                                        <i class="bi bi-eye"></i>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
  }
  
  export default DataTableClient;