import React, {useState, useEffect} from 'react';
import { alerta, formatearMoneda } from "../../services/utilities";
import { validateEmail } from "../../services/validate";
import swal from 'sweetalert';
import axios from 'axios';
import { Apiulr } from "../../services/apirest";

function FormDataClient() {

    const [opcionesSelectTypePropertie, setOpcionesSelectTypePropertie] = useState([]);
    const [count_tab, setCountTab] = useState(1);
    const [class_tips, setClassTips] = useState('container text-center');
    const [class_form1, setClassForm1] = useState('container d-none');
    const [class_form2, setClassForm2] = useState('container d-none');
    const [class_form3, setClassForm3] = useState('container d-none');
    const [class_form4, setClassForm4] = useState('container d-none');
    const [class_form5, setClassForm5] = useState('container d-none');
    const [class_form6, setClassForm6] = useState('container d-none');
    const [btn_atras,  setBtnAtras] = useState('d-none btn btn-secondary');
    const [btn_siguiente, setBtnSiguiente] = useState('btn btn-success');
    const [btn_guardar,  setBtnGuardar] = useState('btn btn-primary d-none');
    const [btn_add_reference, setBtnAddReference] = useState(false);
    const [btn_add_propertie, setBtnAddPropertie] = useState(false);
    const [captionTableAddReference, setcaptionTableAddReference] = useState('')
    const [captionTableAddPropertie, setcaptionTableAddPropertie] = useState('')
    const [list_reference, setListReferences] = useState();
    const [list_porpertie, setListPropertie] = useState();

    useEffect(() => {
        axios.get(
            Apiulr+'client/type_properties',{
                headers: {
                'Authorization': 'Bearer '+localStorage.getItem("token")
                }
            }
          )
          .then(response => {
            setOpcionesSelectTypePropertie(response.data);
          })
          .catch(error => {
            alerta('Error al cargar la lista de tipos de propiedades')
        });
    }, []);
  
    const [references_client, setReferencesClient] = useState({
            "frist_name": "",
            "last_name": "",
            "telephone_number": "",
            "type_reference": "PERSONAL",
            "relation": ""
        }
    );

    const [properties_client, setPropertiesClient] = useState({
            "name": "",
            "description": "",
            "value": 0,
            "status_range": 1,
            "type_properties_id": 0
        }
    );

    const [baseClient, setBaseClient] = useState({
            "first_name": "",
            "last_name": "",
            "type_document": "CC",
            "num_document": "",
            "document_from": "",
            "expedition_date_document": "",
            "birth_date": "",
            "birth_city": "",
            "sex": "MASCULINO",
            "telephone_number_1": "",
            "telephone_number_2": "",
            "email": "",
            "city_residence": "",
            "civil_status": "SOLTERO",
            "address_1": "",
            "address_2": "",
            "profession": "",
            "fixed_income_value": 0,
            "other_income": 0,
            "approved_credit": false,
            "status_credit": false,
            "maximum_amount": 0,
            "minimum_amount": 0,
            "risk_level": 1,
            "habit_pay": 1,
            "debt_value": 0,
            "fixed_expenses": 0,
            "data_credit_point": 500,
            "account_bank": "",
            "type_account_bank": "AHORROS",
            "observation": "",
            "references_client": [],
            "properties_client": []
        }
    );

    const [client, setClient] = useState({
            "first_name": "",
            "last_name": "",
            "type_document": "CC",
            "num_document": "",
            "document_from": "",
            "expedition_date_document": "",
            "birth_date": "",
            "birth_city": "",
            "sex": "MASCULINO",
            "telephone_number_1": "",
            "telephone_number_2": "",
            "email": "",
            "city_residence": "",
            "civil_status": "SOLTERO",
            "address_1": "",
            "address_2": "",
            "profession": "",
            "fixed_income_value": 0,
            "other_income": 0,
            "approved_credit": false,
            "status_credit": false,
            "maximum_amount": 0,
            "minimum_amount": 0,
            "risk_level": 1,
            "habit_pay": 1,
            "debt_value": 0,
            "fixed_expenses": 0,
            "data_credit_point": 500,
            "account_bank": "",
            "type_account_bank": "AHORROS",
            "observation": "",
            "references_client": [],
            "properties_client": []
        }
    );

    const handleFormatMoney = (event) => {
        /*formatearMoneda(event.target)
        const { name, value } = event.target;
        setClient({ ...client, [name]: value });*/
    }

    const handleInputChange = (event) => {

        const { name, value } = event.target;
        setClient({ ...client, [name]: value });
    };

    const handleInputReferenceChange = (event) => {
        const { name, value } = event.target;
        setReferencesClient({ ...references_client, [name]: value });
    };

    const handleInputPropertiesChange = (event) => {
        const { name, value } = event.target;
        setPropertiesClient({ ...properties_client, [name]: value });
    };

    const handleAddReference = () => {
        
        if(references_client.frist_name.length < 3){
            alerta('Nombre Invalido','')
            return
        }else if(references_client.last_name.length < 3){
            alerta('Apellido Invalido','')
            return
        }else if(references_client.telephone_number.length < 10){
            alerta('Celular Invalido','')
            return
        }else if(references_client.relation.length < 3){
            alerta('Relacion Invalida','')
            return
        }

        setcaptionTableAddReference('d-none')

        if(Array.isArray(client.references_client)){
            client.references_client.push(references_client)
            setListReferences(client.references_client.map((r, indice) => (

                <tr key={indice} id={'tr-reference-'+indice}>
                    <td><p>{indice + 1}</p></td>
                    <td><p>{r.frist_name}</p></td>
                    <td><p>{r.last_name}</p></td>
                    <td><p>{r.telephone_number}</p></td>
                    <td><p>{r.type_reference}</p></td>
                    <td><p>{r.relation}</p></td>
                    <td>
                        <a  href='#' className="text-danger" onClick={ () => handleDelteReference(indice)}>
                            <i className="bi bi-trash"></i>
                        </a>
                    </td>
                </tr>
            )))
        }

        setReferencesClient({
            frist_name: "",
            last_name: "",
            telephone_number: "",
            type_reference: "PERSONAL",
            relation: ""
        })
        setBtnAddReference(client.references_client.length == 4 ? true : false)
        
    }

    const handleAddPropertie = () => {
        
        setcaptionTableAddPropertie('d-none')

        if(Array.isArray(client.properties_client)){
            client.properties_client.push(properties_client)
            setListPropertie(client.properties_client.map((p, indice) => (

                <tr key={indice} id={'tr-propertie-'+indice}>
                    <td><p>{indice + 1}</p></td>
                    <td><p>{p.type_properties_id}</p></td>
                    <td><p>{p.name}</p></td>
                    <td><p>{p.value}</p></td>
                    <td><p>{p.status_range}</p></td>
                    <td><p>{p.description}</p></td>
                    <td>
                        <a  href='#' className="text-danger" onClick={ () => handleDeltePropertie(indice)}>
                            <i className="bi bi-trash"></i>
                        </a>
                    </td>
                </tr>
            )))
        }

        setPropertiesClient({
            name: "",
            description: "",
            value: 0,
            status_range: 1,
            type_properties_id: 0
        })

        setBtnAddPropertie(client.properties_client.length == 4 ? true : false)
    }

    const handleDelteReference = (indice) => {
        
        let references = client.references_client
        references.splice(indice, 1)
        setListReferences(client.references_client.map((r, indice) => (
            <tr key={indice} id={'tr-reference-'+indice}>
                <td><p>{indice + 1}</p></td>
                <td><p>{r.frist_name}</p></td>
                <td><p>{r.last_name}</p></td>
                <td><p>{r.telephone_number}</p></td>
                <td><p>{r.type_reference}</p></td>
                <td><p>{r.relation}</p></td>
                <td>
                    <a  href='#' className="text-danger" onClick={ () => handleDelteReference(indice)}>
                        <i className="bi bi-trash"></i>
                    </a>
                </td>
            </tr>
        )))

        setBtnAddReference(false)
        setcaptionTableAddReference(client.references_client.length == 0 ? '' : 'd-none')
    }

    const handleDeltePropertie = (indice) =>{
        
        let propertie = client.properties_client
        propertie.splice(indice, 1)
        setListPropertie(client.properties_client.map((p, indice) => (
            <tr key={indice} id={'tr-propertie-'+indice}>
                <td><p>{indice + 1}</p></td>
                <td><p>{p.properties_client}</p></td>
                <td><p>{p.properties_client}</p></td>
                <td><p>{p.properties_client}</p></td>
                <td><p>{p.properties_client}</p></td>
                <td><p>{p.properties_client}</p></td>
                <td>
                    <a  href='#' className="text-danger" onClick={ () => handleDeltePropertie(indice)}>
                        <i className="bi bi-trash"></i>
                    </a>
                </td>
            </tr>
        )))

        setBtnAddPropertie(false)
        setcaptionTableAddPropertie(client.properties_client.length == 0 ? '' : 'd-none')
    }

    const handleTabForm = () => {
                
        if(count_tab == 1){
            setBtnAtras('btn btn-secondary')
            setClassTips('container text-center d-none')
            setClassForm1('container')
        }else if (count_tab == 2){
            
            if(client.num_document.length < 5){
                alerta('Documento invalido','')
                return
            }else if(client.expedition_date_document.length < 6){
                alerta('Fecha de expedicion invalido','')
                return
            }else if(client.document_from.length < 3){
                alerta('Lugar de expedicion','')
                return
            }else if(client.first_name.length < 3){
                alerta('Nombre invalido','')
                return
            }else if(client.last_name.length < 4){
                alerta('Apellidos invalido','')
                return
            }

            setClassForm1('container d-none')
            setClassForm2('container')
        }else if (count_tab == 3){

            if(client.telephone_number_1.length < 10){
                alerta('Telefono invalido','')
                return
            }else if(!validateEmail(client.email)){
                alerta('Correo electronico invalido','')
                return
            }else if(client.city_residence.length < 3){
                alerta('Ciudad de residencia invalida','')
                return
            }else if(client.address_1.length < 3){
                alerta('Direccion invalida','')
                return
            }

            setClassTips('container text-center d-none')
            setClassForm2('container d-none')
            setClassForm3('container')
        }else if (count_tab == 4){
            setClassForm3('container d-none')
            setClassForm4('container')
        }else if (count_tab == 5){
            setClassForm4('container d-none')
            setClassForm5('container')
        }else if (count_tab == 6){
            setClassForm5('container d-none')
            setClassForm6('container')
            setBtnAtras('btn btn-secondary')
            setBtnSiguiente('d-none btn btn-success')
            setBtnGuardar('btn btn-primary')
        }
        setCountTab(count_tab + 1)
    };

    const handleTabFormAtras = () => {

        if(count_tab == 7){
            setClassForm5('container')
            setClassForm6('container d-none')
            setBtnSiguiente('btn btn-success')
            setBtnGuardar('btn btn-primary d-none')
        }else if(count_tab == 6){
            setClassForm4('container')
            setClassForm5('container d-none')
        }else if(count_tab == 5){
            setClassForm3('container')
            setClassForm4('container d-none')
        }else if(count_tab == 4){
            setClassForm2('container')
            setClassForm3('container d-none')
        }else if(count_tab == 3){
            setClassForm1('container')
            setClassForm2('container d-none')
        }else if(count_tab <= 2){
            setClassTips('container text-center')
            setClassForm1('container d-none')
            setBtnAtras('btn btn-secondary d-none')
        }
        setCountTab(count_tab - 1)
    };

    const handleSaveClient = () =>{

        swal({
            title: "¿ Esta seguro de guardar la información del cliente ?",
            text: "Si esta seguro presione el boton OK de lo contrario Cancelar",
            icon: "info",
            buttons: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                
                axios.post(
                    Apiulr+'client',
                    client,
                    {headers: {'Authorization': 'Bearer '+localStorage.getItem("token")}}
                  )
                  .then(response => {
                    if(response.status == 201){
                        alerta('Se guardo la información de forma exitosa','','success')
                        setClient(baseClient)
                        setCountTab(1)
                        setBtnAtras('btn btn-secondary d-none')
                        setBtnGuardar('btn btn-primary d-none') 
                        setBtnSiguiente('btn btn-success')
                        setClassTips('container text-center')
                        setClassForm6('container d-none')
                    }
                })
                .catch(error => {
                      console.log(error)
                    alerta(error.response.data.detail.message)
                });
            }
        });
    }

      return(

        <React.Fragment>
            <div className="modal fade" id="ModalFormDataClient" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">
                    <div className="modal-content">
                    <div className="modal-body d-flex justify-content-center align-items-center modal-body-formDataClient">
                        <div className='breadcrumb-passed text-secondary '>
                            <p>{count_tab}</p><p>/</p><p>7</p>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="btn-close-modal"></button>
                        <form className='formDataclient'>                            
                            <div className={class_tips}>
                                <i className="bi bi-lightbulb text-secondary fs-1"></i>
                                <h4 className='text-secondary'>Aquí hay algunos consejos a tener en cuenta para una mejor experiencia y manejo de la información.</h4>
                                <div className="div-tips d-flex justify-content-center pt-2">
                                    <div className="alert alert-primary" role="alert">
                                        <i className="bi bi-person-bounding-box"></i>
                                        Procura registrar todos los campos de la información personal del cliente.
                                    </div>

                                    <div className="alert alert-success" role="alert">
                                        <i className="bi bi-geo-alt"></i>
                                        La información de contacto es indispensable para poder ubicar al cliente, no olvides detallar la dirección.
                                    </div>
                                </div>

                                <div className="div-tips d-flex justify-content-center pt-2">
                                    <div className="alert alert-info" role="alert">
                                        <i className="bi bi-cash-coin"></i>
                                        Trata de que el cliente sea lo más acertado posible con la información financiera que te suministre.
                                    </div>

                                    <div className="alert alert-dark " role="alert">
                                        <i className="bi bi-house"></i>
                                        Recuerda registrar las referencias, activos y bienes del cliente.
                                    </div>
                                </div>
                            </div>

                            <div className={class_form1}>
                                <center><i className="bi bi-file-person text-secondary fs-1"></i></center>
                                <h4 className='text-secondary text-center pb-4'>Información Personal</h4>
                                <div className='row'>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="type_document">Tipo Doumento:</label>
                                        <select className="form-select form-control-md" name="type_document" value={client.type_document} onChange={handleInputChange}>
                                            <option value="CC">Cedula</option>
                                            <option value="NIT">NIT</option>
                                            <option value="TI">Tarjeta de Identidad</option>
                                            <option value="PS">Pasaporte</option>
                                            <option value="EXT">Cedula Extrangeria</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="num_document"># Documento:</label>
                                        <input type="text" id="num_document" name="num_document" placeholder="Numero de documento" className="form-control form-control-md" value={client.num_document} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="expedition_date_document">Fecha de expedicion:</label>
                                        <input type="date" id="expedition_date_document" name="expedition_date_document" placeholder="Digite los apellidos del cliente" className="form-control form-control-md" value={client.expedition_date_document}onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="document_from">Lugar de expedicion:</label>
                                        <input type="text" id="document_from" name="document_from" placeholder="Ej: Bogota" className="form-control form-control-md" value={client.document_from} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <br/>
                                <div className='row'>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="birth_city">Lugar de nacimiento:</label>
                                        <input type="text" id="birth_city" name="birth_city" placeholder="Ej: Bogota" className="form-control form-control-md" value={client.birth_city} onChange={handleInputChange} />
                                    </div>                                    
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="birth_date">Fecha de nacimiento:</label>
                                        <input type="date" id="birth_date" name="birth_date" placeholder="Digite los apellidos del cliente" className="form-control form-control-md" value={client.birth_date} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="first_name">Nombres:</label>
                                        <input type="email" id="first_name" name="first_name" placeholder="Digite el nombre del cliente" className="form-control form-control-md" value={client.first_name} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="last_name">Apellidos:</label>
                                        <input type="email" id="last_name" name="last_name" placeholder="Digite los apellidos del cliente" className="form-control form-control-md" value={client.last_name} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="sex">Sexo:</label>
                                        <select className="form-select form-control-md" name="sex" value={client.sex} onChange={handleInputChange}>
                                            <option value="MASCULINO">MASCULINO</option>
                                            <option value="FEMENINO">FEMENINO</option>
                                            <option value="OTRO">OTRO</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="civil_status">Estado Civil:</label>
                                        <select className="form-select form-control-md" name="civil_status" value={client.civil_status} onChange={handleInputChange}>
                                            <option value="SOLTERO">SOLTERO</option>
                                            <option value="CASADO">CASADO</option>
                                            <option value="U LIBRE">U LIBRE</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="profession">Profesión:</label>
                                        <input type="text" id="profession" name="profession" placeholder="Ej: Abogado" className="form-control form-control-md" value={client.profession} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>

                            <div className={class_form2}>
                                <center><i className="bi bi-geo-alt-fill text-secondary fs-1"></i></center>
                                <h4 className='text-secondary text-center pb-4'>Información de contacto</h4>

                                <div className='row'>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="usuatelephone_number_1">Telefono:</label>
                                        <input type="number" id="telephone_number_1" name="telephone_number_1" placeholder="Telefono celular" className="form-control form-control-md" maxLength="10" value={client.telephone_number_1} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="telephone_number_2">Telefono 2:</label>
                                        <input type="number" id="telephone_number_2" name="telephone_number_2" placeholder="Telefono fijo" className="form-control form-control-md" maxLength="10" value={client.telephone_number_2} onChange={handleInputChange} />
                                    </div> 
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="email">Correo electronico:</label>
                                        <input type="text" id="email" name="email" placeholder="ejemplo@dominio.com" className="form-control form-control-md" value={client.email} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="city_residence">Ciudad de residencia:</label>
                                        <input type="text" id="city_residence" name="city_residence" placeholder="Ej: Bogota" className="form-control form-control-md" value={client.city_residence} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="address_1">Direccion:</label>
                                        <input type="text" id="address_1" name="address_1" placeholder="Calle 14 Cra 10 " className="form-control form-control-md" value={client.address_1} onChange={handleInputChange} />
                                    </div> 
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="address_2">Barrio / Verdad / Localidad:</label>
                                        <input type="text" id="address_2" name="address_2" placeholder="Ej: Centro" className="form-control form-control-md" value={client.address_2} onChange={handleInputChange} />
                                    </div> 
                                </div>
                            </div>

                            <div className={class_form3}>
                                <center><i className="bi bi-cash-coin text-secondary fs-1"></i></center>
                                <h4 className='text-secondary text-center pb-4'>Información Financiera</h4>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="fixed_income_value">Ingresos fijos</label>
                                        <input type="number" id="fixed_income_value" name="fixed_income_value" placeholder="$1.000.000" className="form-control form-control-md"  value={client.fixed_income_value} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="other_income">Otros ingresos</label>
                                        <input type="number" id="other_income" name="other_income" placeholder="$1.000.000" className="form-control form-control-md"  value={client.other_income} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="fixed_expenses">Gastos fijos</label>
                                        <input type="number" id="fixed_expenses" name="fixed_expenses" placeholder="$1.000.000" className="form-control form-control-md"  value={client.fixed_expenses} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="debt_value">Deudas u obligaciones</label>
                                        <input type="number" id="debt_value" name="debt_value" placeholder="$1.000.000" className="form-control form-control-md"  value={client.debt_value} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="type_account_bank">Tipo cuenta bancaria</label>
                                        <select className="form-select form-control-md" name="type_account_bank" value={client.type_account_bank} onChange={handleInputChange} >
                                            <option value="AHORROS">AHORROS</option>
                                            <option value="CORRIENTE">CORRIENTE</option>
                                            <option value="CONVENIO">CONVENIO</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <label className="form-label" htmlFor="account_bank"># Cuenta Bancaria</label>
                                        <input type="text" id="account_bank" name="account_bank" placeholder="00-00000-000" className="form-control form-control-md"  value={client.account_bank} onChange={handleInputChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label" htmlFor="name_bank">Banco</label>
                                        <select className="form-select form-control-md" name="name_bank" value={client.name_bank} onChange={handleInputChange}>
                                            <option value="" disabled> -- Seleccnione un banco -- </option>
                                            <option value="BAN100">BAN100</option>
                                            <option value="BANCAMIA S.A.">BANCAMIA S.A.</option>
                                            <option value="BANCO AGRARIO">BANCO AGRARIO</option>
                                            <option value="BANCO AV VILLAS">BANCO AV VILLAS</option>
                                            <option value="BANCO BBVA COLOMBIA S.A.">BANCO BBVA COLOMBIA S.A.</option>
                                            <option value="BANCO CAJA SOCIAL">BANCO CAJA SOCIAL</option>
                                            <option value="BANCO COOPERATIVO COOPCENTRAL">BANCO COOPERATIVO COOPCENTRAL</option>
                                            <option value="BANCO DAVIVIENDA">BANCO DAVIVIENDA</option>
                                            <option value="BANCO DE BOGOTA">BANCO DE BOGOTA</option>
                                            <option value="BANCO DE OCCIDENTE">BANCO DE OCCIDENTE</option>
                                            <option value="BANCO FAvalueLA ">BANCO FAvalueLA </option>
                                            <option value="BANCO FINANDINA S.A. BIC">BANCO FINANDINA S.A. BIC</option>
                                            <option value="BANCO GNB SUDAMERIS">BANCO GNB SUDAMERIS</option>
                                            <option value="BANCO ITAU">BANCO ITAU</option>
                                            <option value="BANCO PICHINCHA S.A.">BANCO PICHINCHA S.A.</option>
                                            <option value="BANCO POPULAR">BANCO POPULAR</option>
                                            <option value="BANCO SANTANDER COLOMBIA">BANCO SANTANDER COLOMBIA</option>
                                            <option value="BANCO SERFINANZA">BANCO SERFINANZA</option>
                                            <option value="BANCO UNION antes GIROS">BANCO UNION antes GIROS</option>
                                            <option value="BANCOLOMBIA">BANCOLOMBIA</option>
                                            <option value="BANCOOMEVA S.A.">BANCOOMEVA S.A.</option>
                                            <option value="CFA COOPERATIVA FINANCIERA">CFA COOPERATIVA FINANCIERA</option>
                                            <option value="CITIBANK ">CITIBANK </option>
                                            <option value="COLTEFINANCIERA">COLTEFINANCIERA</option>
                                            <option value="CONFIAR COOPERATIVA FINANCIERA">CONFIAR COOPERATIVA FINANCIERA</option>
                                            <option value="COOFINEP COOPERATIVA FINANCIERA">COOFINEP COOPERATIVA FINANCIERA</option>
                                            <option value="COTRAFA">COTRAFA</option>
                                            <option value="DALE">DALE</option>
                                            <option value="DAVIPLATA">DAVIPLATA</option>
                                            <option value="IRIS">IRIS</option>
                                            <option value="LULO BANK">LULO BANK</option>
                                            <option value="MOVII S.A.">MOVII S.A.</option>
                                            <option value="RAPPIPAY">RAPPIPAY</option>
                                            <option value="RAPPIPAY DAVIPLATA">RAPPIPAY DAVIPLATA</option>
                                            <option value="SCOTIABANK COLPATRIA">SCOTIABANK COLPATRIA</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div className={class_form4}>
                                <center><i className="bi bi-people text-secondary fs-1"></i></center>
                                <h4 className='text-secondary text-center pb-4'>Referencias</h4>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="form-label" htmlFor="frist_name">Nombres</label>
                                        <input type="text" id="frist_name" name="frist_name" placeholder="Nombres" className="form-control form-control-md"  value={references_client.frist_name} onChange={handleInputReferenceChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label" htmlFor="last_name">Apellidos</label>
                                        <input type="text" id="last_name" name="last_name" placeholder="Apellidos" className="form-control form-control-md"  value={references_client.last_name} onChange={handleInputReferenceChange} />
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label" htmlFor="telephone_number">Telefono</label>
                                        <input type="number" id="telephone_number" name="telephone_number" placeholder="Telefono" className="form-control form-control-md"  value={references_client.telephone_number} onChange={handleInputReferenceChange} />
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-4">
                                        <label className="form-label" htmlFor="type_reference">Tipo</label>
                                        <select className="form-select form-control-md" name="type_reference" value={references_client.type_reference} onChange={handleInputReferenceChange} >
                                            <option value="PERSONAL">PERSONAL</option>
                                            <option value="FAMILIAR">FAMILIAR</option>
                                            <option value="LABORAL">LABORAL</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label" htmlFor="relation">Relacion</label>
                                        <input type="text" id="relation" name="relation" placeholder="Relacion" className="form-control form-control-md"  value={references_client.relation} onChange={handleInputReferenceChange} />
                                    </div>
                                    <div className='col-md-3'>
                                        <br/>
                                        <button type="button" className="btn btn-primary mt-2" disabled={btn_add_reference} onClick={handleAddReference}>
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 pt-4'>
                                        <table className='table table-hover table-list-references'>
                                            <caption className={captionTableAddReference}>
                                                <h5 className='text-secondary text-center'>No hay referencias agregadas</h5>
                                            </caption>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Nombres</th>
                                                    <th>Apellidos</th>
                                                    <th>Telefono</th>
                                                    <th>Tipo Referencia</th>
                                                    <th>Relacion</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {list_reference}             
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className={class_form5}>
                                <br></br>
                                <center><i className="bi bi-houses text-secondary fs-1"></i></center>
                                <h4 className='text-secondary text-center pb-4'>Activos del clientes</h4>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="type_properties_id">Tipo Activo</label>
                                        <select className="form-select form-control-md" name="type_properties_id" value={properties_client.type_properties_id} onChange={handleInputPropertiesChange} >
                                            <option>-- Seleccione un tipo --</option>
                                        {opcionesSelectTypePropertie.map(opcion => (
                                            <option key={opcion.id} value={opcion.id}>{opcion.name}</option>
                                        ))}
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="name">Activo</label>
                                        <input type="text" id="name" name="name" placeholder="Activo" className="form-control form-control-md"  value={properties_client.name} onChange={handleInputPropertiesChange} />
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="value">Valor</label>
                                        <input type="number" id="value" name="value" placeholder="$1.000.000" className="form-control form-control-md"  value={properties_client.value} onChange={handleInputPropertiesChange} onBlur={handleFormatMoney} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="status_range">Estado del activo</label>
                                        <select className="form-select form-control-md" name="status_range" value={properties_client.status_range} onChange={handleInputPropertiesChange}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>
                                <div className='row'>
                                    <div className="col-md-9">
                                        <label className="form-label" htmlFor="description">Descripcion</label>
                                        <input type="text" id="description" name="description" placeholder="Descripcion del activo" className="form-control form-control-md"  value={properties_client.description} onChange={handleInputPropertiesChange} />
                                    </div>
                                    <div className='col-md-3'>
                                        <br/>
                                        <button type="button" className="btn btn-primary mt-2" disabled={btn_add_propertie} onClick={handleAddPropertie}>
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12 pt-4'>
                                        <table className='table table-hover table-list-propertie'>
                                            <caption className={captionTableAddPropertie}>
                                                <h5 className='text-secondary text-center'>No hay activos agregadas</h5>
                                            </caption>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Tipo</th>
                                                    <th>Activo</th>
                                                    <th>Valor</th>
                                                    <th>Estado</th>
                                                    <th>Descripcion</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {list_porpertie}             
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            <div className={class_form6}>
                                <center><i className="bi bi-gear-fill text-secondary fs-1"></i></center>
                                <h4 className='text-secondary text-center pb-4'>Configuración y aprobacion de creditos </h4>
                                <div className='row'>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="risk_level">Nivel de riesgo:</label>
                                        <select className="form-select form-control-md" name="risk_level" value={client.risk_level} onChange={handleInputChange}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="habit_pay">Habito de pago:</label>
                                        <select className="form-select form-control-md" name="habit_pay" value={client.habit_pay} onChange={handleInputChange}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">                               
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="data_credit_point">Puntaje data credito</label>
                                        <select className="form-select form-control-md" name="data_credit_point" value={client.data_credit_point} onChange={handleInputChange}>
                                            <option value="100">100</option>
                                            <option value="200">200</option>
                                            <option value="300">300</option>
                                            <option value="400">400</option>
                                            <option value="500">500</option>
                                            <option value="600">600</option>
                                            <option value="700">700</option>
                                            <option value="800">800</option>
                                            <option value="900">900</option>
                                            <option value="1000">1000</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="approved_credit">Activo para creditos</label>
                                        <select className="form-select form-control-md" name="approved_credit" value={client.approved_credit} onChange={handleInputChange}>
                                            <option value="0">NO</option>
                                            <option value="1">SI</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className='col-md-6'>
                                        <label className="form-label" htmlFor="minimum_amount">Monto minimo prestamos</label>
                                        <input type="number" id="minimum_amount" name="minimum_amount" placeholder="$1.000.000" className="form-control form-control-md" value={client.minimum_amount} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                    </div>
                                    <div className='col-md-6'>
                                        <label className="form-label" htmlFor="maximum_amount">Monto maximo prestamos</label>
                                        <input type="number" id="maximum_amount" name="maximum_amount" placeholder="$1.000.000" className="form-control form-control-md" value={client.maximum_amount} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className={btn_atras} onClick={handleTabFormAtras}>Atras</button>
                        <button type="button" className={btn_siguiente} onClick={handleTabForm}>Siguiente</button>
                        <button type="button" className={btn_guardar} onClick={handleSaveClient}>Guardar Cliente</button>
                    </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FormDataClient