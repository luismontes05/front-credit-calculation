import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import  avatar_gril from  "../../assetss/img/avatar_gril.png"
import  avatar_men from  "../../assetss/img/avatar_men.png"
import ViweClient from './ViweClient';

function DataTableClient(props) {

    const [filter, setFilter] = useState('');
    const [idClient, setIdClient] = useState(false)
    const filteredData = props.dataClients.filter((item) => {
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
                    <caption className='pt-4'>
                        <div className={`d-flex align-items-center ${props.loading}`}>
                            <strong>Por favor espere...</strong>
                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                        </div>
                    </caption>
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
                                    <img width="35" className="rounded-circle" src={client.sex == 'MASCULINO'? avatar_men : avatar_gril } alt="" />
                                </td>
                                <td>{client.full_name}</td>
                                <td>{client.type_document} {client.num_document}</td>
                                <td>{client.email}</td>
                                <td>{client.telephone_number_1}</td>
                                <td>{client.last_update}</td>
                                <td>{client.status ? <span className="badge text-bg-success">Activo</span> : <span className="badge text-bg-danger">Inactivo</span>}
                                </td>
                                <td>
                                    <a  href="#" 
                                        data-bs-toggle="modal" 
                                        data-bs-target="#ModalViweClient" 
                                        className="link-info icon-link-hover link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover" 
                                        title="Ver informacion del cliente"
                                        onClick={() => setIdClient(client.id)}
                                    >
                                        <i className="bi bi-eye"></i>
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

  const mapSateToProps = state => {

    return {
        dataClients: state.dataClients
    }

  }
  
  export default  connect(mapSateToProps, null)(DataTableClient);