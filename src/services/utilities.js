
import Swal  from 'sweetalert2';

export const alerta = (title='! Alerta ¡', text='Se presento un error', icon='error') =>{
  Swal.fire(
    title,
    text,
    icon
  )
}

export const toast = (title='! Alerta ¡', text='Se presento un error', icon='error') =>{

  Swal.fire({
    toast: true,
    position: 'bottom-right',
    title: title,
    html: '<p style="font-size:15px">' + text + '</p>',
    icon: icon,
    showCancelButton: false,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    width: 400
});

}


export const formatearMoneda = (input) =>{

  const valor = parseFloat(input.value);
  
  if (!isNaN(valor)) { 
    input.value = valor.toLocaleString('es-CO', {minimumFractionDigits: 0});
  }
}

