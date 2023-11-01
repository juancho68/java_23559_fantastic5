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
    return (valorEntrada*descuento*cantidad);
}

btnResumen.addEventListener("click",()=>{
       
    let totalPago;


        switch (categoria.value){
            case "1": //Estudiante
                totalPago=calcularTotalaPagar(0.20,parseInt(cantidad.value));
                break;
            case "2":  //Trainee
                totalPago=calcularTotalaPagar(0.50,parseInt(cantidad.value));
                break;
            case "3":  //Junior
                totalPago=calcularTotalaPagar(0.85,parseInt(cantidad.value));
                break;
            default:
                totalPago=calcularTotalaPagar(1,parseInt(cantidad.value));
                break;

        }

    parrafo.innerHTML="Total a pagar: $" + totalPago;
    Event.preventDefault(); 
})

