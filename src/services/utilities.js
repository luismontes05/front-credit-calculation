
import swal from 'sweetalert';

export const alerta = (title='! Alerta ¡', text='Se presento un error', icon='error') =>{
    swal({
        title: title,
        text: text,
        icon: icon,
        button: "Aceptar",
      });
}


export const formatearMoneda = (input) =>{

  const valor = parseFloat(input.value);
  
  if (!isNaN(valor)) { 
    input.value = valor.toLocaleString('es-CO', {minimumFractionDigits: 0});
  }
}

