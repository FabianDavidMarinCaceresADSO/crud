import { documentos, usuarios } from "./modulo.js";

async function consultar(){
    const docs = await documentos()
    const users = await usuarios()
    console.log(docs)
    const selec = document.querySelector("#tip_document")
  
    console.log(selec);
    
    docs.forEach(element => {
        let options = document.createElement('option')
        console.log(options)
        selec.appendChild(options)
        options.innerText = element.tipo
    });
}

async function enviarDatos(datos) {
    try {
        const response = await fetch('http://localhost:3000/usuarios', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        const json = await response.json();
        console.log('Respuesta del servidor:', json);
    } catch (error) {
        console.error('Error al enviar datos:', error);
    }
}

const form = document.querySelector('form');

function capturar(event) {
    event.preventDefault();
    
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const correo = document.querySelector("#email").value;
    const num_doc = document.querySelector("#num_doc").value;
    const direccion = document.querySelector("#direccion").value;
    const telefono = document.querySelector("#telefono").value;
    const tip_doc = document.querySelector("#tip_document").value;

    
    
    const datos = {
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        num_doc: num_doc,
        direccion: direccion,
        telefono: telefono,
        tip_doc: tip_doc,
    };
    
    enviarDatos(datos);
    agregarUsuarioALaTabla(datos);
}


agregarUsuarioALaTabla.forEach (usuarios=>  {

const  celda = document.createElement("td");
celda.textContent = usuarios.nombre;




});

/**const tabla = document.getElementById('tabla-datos');
const tbody = tabla.querySelector('tbody');

datos.forEach( usuario =>  {
    const nuevaFila = tabla.insertRow();
    const celdaNombre = nuevaFila.insertCell();
    const celdaApellido = nuevaFila.insertCell();
    const celdaCorreo = nuevaFila.insertCell();
    const celdaDireccion = nuevaFila.insertCell();
    const celdaTelefono = nuevaFila.insertCell();
    const celdaTipoDoc = nuevaFila.insertCell();
    const celdaNumero = nuevaFila.insertCell();

  celdaNombre.textContent = usuario.nombre;
  celdaApellido.textContent = usuario.apellido;
  celdaCorreo.textContent = usuario.correo;
  celdaC.textContent = usuario.ciudad;

  });

 */






form.addEventListener("submit", capturar);

consultar(); // Llamamos a la función consultar al cargar la página para llenar el select con tipos de documento
