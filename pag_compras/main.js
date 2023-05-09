import myHeader from "../components/myHeader.js";
import { navbar } from "../components/navbar.js";
import { agregarCliente } from "../js/agregarCliente.js";
import { agregarEmpleado } from "../js/agregarEmpleado.js";
import { agregarProducto } from "../js/agregarProducto.js";
myHeader.show();
navbar();
agregarCliente(); agregarEmpleado(); agregarProducto();

let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  let cliente = document.querySelector('#cliente').value;
  let empleado = document.querySelector('#empleado').value;
  let fecha = document.querySelector('#fecha').value;
  let producto = document.querySelector('#producto').value;
  let productoN = document.querySelector('#producto').id;
  let cantidad = document.querySelector('#cantidad').value;

  let data = {
    cliente,
    empleado,
    fecha,
    producto,
    productoN,
    cantidad
  };

  fetch('http://localhost:4000/compras', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);

  })
  .catch((error) => {
    console.error('Error:', error);

  });
});