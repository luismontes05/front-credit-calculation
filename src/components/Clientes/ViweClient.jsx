import React, {useState, useEffect} from 'react';
import { dataClient } from "../../services/Client"
import { alerta, formatearMoneda } from "../../services/utilities";

function ViweClient(props){

    
    useEffect( () =>{

        setLoadingForm('d-none')
        setLoading('')
        
        dataClient(props.idClient).then(response => {
            if(response.status === 200){
                setClient(response.data)
            }else{
                alerta('Error al cargar la lista de clientes', response.message)
            }
        }).catch(error =>{
            setLoading('d-none')
            alerta('Error al cargar la lista de clientes', error.message)
        }). finally(
            setTimeout(() => {
                setLoading('d-none')
                setLoadingForm('')
              }, 500)
        )
        
    },[props.idClient])

    const [loading, setLoading] = useState('')
    const [loadingform, setLoadingForm] = useState('d-none')

    const [client, setClient] = useState([]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setClient({ ...client, [name]: value });
    };

    const handleFormatMoney = (event) => {
        /*formatearMoneda(event.target)
        const { name, value } = event.target;
        setClient({ ...client, [name]: value });*/
    }

    return(

        <React.Fragment>
            <div className="modal fade" id="ModalViweClient" data-bs-backdrop="static" data-bs-keyboard="false"  aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-body modal-body-viwe-client">
                            <div class={`d-flex align-items-center ${loading}`}>
                                <strong>Por favor espere...</strong>
                                <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                            </div>
                            <form className={`formDataViweclient ${loadingform}`}>
                                {client.status ? <span class="badge text-bg-success fs-6">Activo</span> : <span class="badge text-bg-danger fs-6">Inactivo</span>}
                                <div className="pt-4 info-personal ">
                                    <h5 className='text-secondary' data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="true" aria-controls="collapse1">
                                        <i className="bi bi-file-person text-secondary fs-4"></i>
                                        Información Personal
                                    </h5>
                                    <div class="collapse show " id="collapse1">
                                        <div className='row'>
                                            <div className="col-md-3">
                                                <label className="form-label" htmlFor="first_name">Nombres:</label>
                                                <input type="text" id="first_name" name="first_name" placeholder="Digite el nombre del cliente" className="form-control form-control-sm" value={client.first_name} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3">
                                                <label className="form-label" htmlFor="last_name">Apellidos:</label>
                                                <input type="text" id="last_name" name="last_name" placeholder="Digite los apellidos del cliente" className="form-control form-control-sm" value={client.last_name} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="num_document"># Documento:</label>
                                                <input type="text" id="num_document" name="num_document" placeholder="Numero de documento" className="form-control form-control-sm" value={client.num_document} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="type_document">Tipo Doumento:</label>
                                                <select className="form-select form-select-sm" name="type_document" value={client.type_document} onChange={handleInputChange}>
                                                    <option value="CC">Cedula</option>
                                                    <option value="NIT">NIT</option>
                                                    <option value="TI">Tarjeta de Identidad</option>
                                                    <option value="PS">Pasaporte</option>
                                                    <option value="EXT">Cedula Extrangeria</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="sex">Sexo:</label>
                                                <select className="form-select form-select-sm" name="sex" value={client.sex} onChange={handleInputChange}>
                                                    <option value="MASCULINO">MASCULINO</option>
                                                    <option value="FEMENINO">FEMENINO</option>
                                                    <option value="OTRO">OTRO</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='row pt-2'>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="birth_city">Lugar nacimiento:</label>
                                                <input type="text" id="birth_city" name="birth_city" placeholder="Ej: Bogota" className="form-control form-control-sm" value={client.birth_city} onChange={handleInputChange} />
                                            </div> 
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="profession">Profesión:</label>
                                                <input type="text" id="profession" name="profession" placeholder="Ej: Abogado" className="form-control form-control-sm" value={client.profession} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="birth_date">Fecha nacimiento:</label>
                                                <input type="date" id="birth_date" name="birth_date" placeholder="Digite los apellidos del cliente" className="form-control form-control-sm" value={client.birth_date} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="expedition_date_document">Fecha expedicion:</label>
                                                <input type="date" id="expedition_date_document" name="expedition_date_document" placeholder="Digite los apellidos del cliente" className="form-control form-control-sm" value={client.expedition_date_document}onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="document_from">Lugar expedicion:</label>
                                                <input type="text" id="document_from" name="document_from" placeholder="Ej: Bogota" className="form-control form-control-sm" value={client.document_from} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="civil_status">Estado Civil:</label>
                                                <select className="form-select form-select-sm" name="civil_status" value={client.civil_status} onChange={handleInputChange}>
                                                    <option value="SOLTERO">SOLTERO</option>
                                                    <option value="CASADO">CASADO</option>
                                                    <option value="U LIBRE">U LIBRE</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-3 info-contacto">
                                    <h5 className='text-secondary' data-bs-toggle="collapse" href="#collapse2" role="button" aria-expanded="true" aria-controls="collapse2">
                                        <i className="bi bi-geo-alt-fill text-secondary fs-4"></i>
                                        Información de contacto
                                    </h5>
                                    <div class="collapse show " id="collapse2">
                                        <div className='row'>
                                            <div className="col-md-3">
                                                <label className="form-label" htmlFor="usuatelephone_number_1">Telefono:</label>
                                                <input type="number" id="telephone_number_1" name="telephone_number_1" placeholder="Telefono celular" className="form-control form-control-sm" maxLength="10" value={client.telephone_number_1} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3">
                                                <label className="form-label" htmlFor="telephone_number_2">Telefono 2:</label>
                                                <input type="number" id="telephone_number_2" name="telephone_number_2" placeholder="Telefono fijo" className="form-control form-control-sm" maxLength="10" value={client.telephone_number_2} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3">
                                                <label className="form-label" htmlFor="email">Correo electronico:</label>
                                                <input type="text" id="email" name="email" placeholder="ejemplo@dominio.com" className="form-control form-control-sm" value={client.email} onChange={handleInputChange} />
                                            </div> 
                                        </div>
                                        <div className="row pt-2">
                                            <div className="col-md-3">
                                                <label className="form-label" htmlFor="city_residence">Ciudad de residencia:</label>
                                                <input type="text" id="city_residence" name="city_residence" placeholder="Ej: Bogota" className="form-control form-control-sm" value={client.city_residence} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3">
                                                <label className="form-label" htmlFor="address_1">Direccion:</label>
                                                <input type="text" id="address_1" name="address_1" placeholder="Calle 14 Cra 10 " className="form-control form-control-sm" value={client.address_1} onChange={handleInputChange} />
                                            </div> 
                                            <div className="col-md-3">
                                                <label className="form-label" htmlFor="address_2">Barrio / Verdad / Localidad:</label>
                                                <input type="text" id="address_2" name="address_2" placeholder="Ej: Centro" className="form-control form-control-sm" value={client.address_2} onChange={handleInputChange} />
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-3 info-financiera'>
                                    <h5 className='text-secondary' data-bs-toggle="collapse" href="#collapse3" role="button" aria-expanded="true" aria-controls="collapse3">
                                        <i className="bi bi-cash-coin text-secondary fs-4"></i>
                                        Información Financiera
                                    </h5>
                                    <div class="collapse show " id="collapse3">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="fixed_income_value">Ingresos fijos</label>
                                                <input type="number" id="fixed_income_value" name="fixed_income_value" placeholder="$1.000.000" className="form-control form-control-sm"  value={client.fixed_income_value} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="other_income">Otros ingresos</label>
                                                <input type="number" id="other_income" name="other_income" placeholder="$1.000.000" className="form-control form-control-sm"  value={client.other_income} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="fixed_expenses">Gastos fijos</label>
                                                <input type="number" id="fixed_expenses" name="fixed_expenses" placeholder="$1.000.000" className="form-control form-control-sm"  value={client.fixed_expenses} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="debt_value">Deudas u obligaciones</label>
                                                <input type="number" id="debt_value" name="debt_value" placeholder="$1.000.000" className="form-control form-control-sm"  value={client.debt_value} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="type_account_bank">Tipo cuenta bancaria</label>
                                                <select className="form-select form-select-sm" name="type_account_bank" value={client.type_account_bank} onChange={handleInputChange} >
                                                    <option value="AHORROS">AHORROS</option>
                                                    <option value="CORRIENTE">CORRIENTE</option>
                                                    <option value="CONVENIO">CONVENIO</option>
                                                </select>
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="account_bank"># Cuenta Bancaria</label>
                                                <input type="text" id="account_bank" name="account_bank" placeholder="00-00000-000" className="form-control form-control-sm"  value={client.account_bank} onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="name_bank">Banco</label>
                                                <select className="form-select form-select-sm" name="name_bank" value={client.name_bank} onChange={handleInputChange}>
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
                                </div>
                                <div className='pt-3 info-config-credit'>                                    
                                    <h5 className='text-secondary' data-bs-toggle="collapse" href="#collapse4" role="button" aria-expanded="true" aria-controls="collapse4">
                                        <i className="bi bi-gear-fill text-secondary fs-4"></i>
                                        Configuración y aprobacion de creditos 
                                    </h5>
                                    <div class="collapse show " id="collapse4">
                                        <div className='row'>
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="risk_level">Nivel de riesgo:</label>
                                                <select className="form-select form-select-sm" name="risk_level" value={client.risk_level} onChange={handleInputChange}>
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
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="habit_pay">Habito de pago:</label>
                                                <select className="form-select form-select-sm" name="habit_pay" value={client.habit_pay} onChange={handleInputChange}>
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
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="data_credit_point">Puntaje data credito</label>
                                                <select className="form-select form-select-sm" name="data_credit_point" value={client.data_credit_point} onChange={handleInputChange}>
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
                                            <div className="col-md-2">
                                                <label className="form-label" htmlFor="approved_credit">Activo para creditos</label>
                                                <select className="form-select form-select-sm" name="approved_credit" value={client.approved_credit} onChange={handleInputChange}>
                                                    <option value="0">NO</option>
                                                    <option value="1">SI</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row pt-2">
                                            <div className='col-md-3'>
                                                <label className="form-label" htmlFor="minimum_amount">Monto minimo prestamos</label>
                                                <input type="number" id="minimum_amount" name="minimum_amount" placeholder="$1.000.000" className="form-control form-control-sm" value={client.minimum_amount} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                            </div>
                                            <div className='col-md-3'>
                                                <label className="form-label" htmlFor="maximum_amount">Monto maximo prestamos</label>
                                                <input type="number" id="maximum_amount" name="maximum_amount" placeholder="$1.000.000" className="form-control form-control-sm" value={client.maximum_amount} onChange={handleInputChange} onBlur={handleFormatMoney} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className='btn btn-secondary' data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className='btn btn-primary'>Guardar Cliente</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ViweClient