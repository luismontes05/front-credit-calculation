import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';

const usuarios = [
  { id: 1, nombre: 'Juan', email: 'juan@mail.com', telefono: '555-1234' },
  { id: 2, nombre: 'María', email: 'maria@mail.com', telefono: '555-5678' },
  { id: 3, nombre: 'Pedro', email: 'pedro@mail.com', telefono: '555-9101' },
];

function DataTableClient() {

  
    const [busqueda, setBusqueda] = useState('');
    
    const filtrarUsuarios = () => {
        return usuarios.filter((usuario) =>
            usuario.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );
    };

    return (
        <div>
            <Form.Control
            type="text"
            placeholder="Buscar usuario"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            />
        
            <Table striped bordered hover>
                
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                </tr>
                </thead>
                <tbody>
                    {filtrarUsuarios().map((usuario) => (
                        <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.email}</td>
                        <td>{usuario.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
  }
  
  export default DataTableClient;