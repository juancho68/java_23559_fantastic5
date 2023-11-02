const nombre = document.querySelector('#inputNombre');
const apellido = document.querySelector('#inputApellido');
const correo = document.querySelector('#inputCorreo');
const cantidad = document.querySelector('#inputCantidad');
const categoria = document.querySelector('#inputCategoria');
const parrafo = document.querySelector('#totalAPagar');
const btnBorrar = document.querySelector('#btnBorrar');
const btnResumen = document.querySelector('#btnResumen');
const valorEntrada = 200;

let categoriaSelec = categoria.value;


btnBorrar.addEventListener("click", () => {
  nombre.value = "";
  apellido.value = "";
  correo.value = "";
  cantidad.value = "";
  parrafo.innerHTML = "Total a pagar: $"
});

function calcularTotalaPagar(descuento,cantidad){

    var valorPorCantidad = valorEntrada * cantidad;
    var total = valorPorCantidad - (valorPorCantidad * descuento);
    return total;
    // return (valorEntrada*descuento*cantidad);
}

btnResumen.addEventListener("click",()=>{
       
    let totalPago;

    //Valida que los campos no esten vacios
    if(nombre.value.trim() === '' && apellido.value.trim() === '' && correo.value.trim() === '' && cantidad.value.trim() === '') {

            //Creo una alerta con js si los campos estan vacios
            var html = `
            <div id="prueba" class="alert alert-danger bg-danger text-white p-2" role="alert">
                <i class="bi bi-exclamation-triangle pe-2"></i>Los campos no pueden estar vacios
            </div>
            `;

            document.querySelector("#alerta").innerHTML = html;
            //Le doy 1,5seg a la alerta para que se muestre en pantalla, luego desaparece
            setTimeout(() => {
                var divEliminar = document.querySelector("#prueba");
                divEliminar.parentNode.removeChild(divEliminar);
            }, 1500);

    }   else if( cantidad.value < 1 || cantidad.value > 5) {        
            var html = `
                <div id="prueba" class="alert alert-danger bg-danger text-white p-2" role="alert">
                    <i class="bi bi-exclamation-triangle pe-2"></i>Elija entre 1 y 5 tickets
                </div>
                `;

            document.querySelector("#alerta").innerHTML = html;
            setTimeout(() => {
                var divEliminar = document.querySelector("#prueba");
                divEliminar.parentNode.removeChild(divEliminar);
            }, 1500);  
        }
        else if( nombre.value.trim() === '') {        
            var html = `
                <div id="prueba" class="alert alert-danger bg-danger text-white p-2" role="alert">
                    <i class="bi bi-exclamation-triangle pe-2"></i>El nombre no puede estar vacio
                </div>
                `;

            document.querySelector("#alerta").innerHTML = html;
            setTimeout(() => {
                var divEliminar = document.querySelector("#prueba");
                divEliminar.parentNode.removeChild(divEliminar);
            }, 1500);  
        }
        else if( apellido.value.trim() === '') {        
            var html = `
                <div id="prueba" class="alert alert-danger bg-danger text-white p-2" role="alert">
                    <i class="bi bi-exclamation-triangle pe-2"></i>El apellido no puede estar vacio
                </div>
                `;

            document.querySelector("#alerta").innerHTML = html;
            setTimeout(() => {
                var divEliminar = document.querySelector("#prueba");
                divEliminar.parentNode.removeChild(divEliminar);
            }, 1500);
        }
        else if( correo.value.trim() === '') {        
            var html = `
                <div id="prueba" class="alert alert-danger bg-danger text-white p-2" role="alert">
                    <i class="bi bi-exclamation-triangle pe-2"></i>El correo no puede estar vacio
                </div>
                `;

            document.querySelector("#alerta").innerHTML = html;
            setTimeout(() => {
                var divEliminar = document.querySelector("#prueba");
                divEliminar.parentNode.removeChild(divEliminar);
            }, 1500);   
        } 
    else {
        switch (categoria.value) {
            case "1": //Estudiante
                totalPago=calcularTotalaPagar(0.80,parseInt(cantidad.value));
                break;
            case "2":  //Trainee
                totalPago=calcularTotalaPagar(0.50,parseInt(cantidad.value));
                break;
            case "3":  //Junior
                totalPago=calcularTotalaPagar(0.15,parseInt(cantidad.value));
                break;
            default:
                totalPago=calcularTotalaPagar(1,parseInt(cantidad.value));
                break;
        }
        parrafo.innerHTML="Total a pagar: $" + totalPago;
    }
     Event.preventDefault(); 
})

