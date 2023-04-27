import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setDataClients } from '../../actions'
import Sidebar from '../Header/Sidebar';
import DataTableClient from './DataTableClient';
import ModalNewClient from './ModalNewClient';
import { toast } from "../../services/utilities";
import { dataClient } from "../../services/Client"
import '../../assetss/css/Clientes.css'
import '../../assetss/css/App.css'

function Clientes(props) {

    const [listClient, setListClient] = useState([]);
    const [loading, setLoading] = useState('')

    useEffect(() => {

        setLoading('')
        
        dataClient().then(response => {
            if(response.status === 200){
                setListClient(response.data);
                props.setDataClients(response.data)
            }else{
                toast('Error al cargar la lista de clientes', response.message)
            }
        }).catch(error =>{
            toast('Error al cargar la lista de clientes', error.message)
        }). finally(
            setTimeout(() => {
                setLoading('d-none')
              }, 500)
        )
    }, []);

    return(

        <React.Fragment>
            <Sidebar modulo="clientes"/>
            <div className='container container-modulos'>
                <DataTableClient  loading={loading}  />
                <ModalNewClient/>
            </div>
        </React.Fragment>
    );
}


const mapDispatchToProps  = {
    setDataClients,
};

export default connect(null, mapDispatchToProps)(Clientes)