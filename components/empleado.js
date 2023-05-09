import { getEmpleado } from "../js/getEmpleado.js";
import { validate, validateEmpleado } from "../js/newEmpleado.js";
import { confirmDelete } from "../js/deleteEmpleado.js";
export function empleados(){
    document.addEventListener("DOMContentLoaded", loadEmpleado);
    async function loadEmpleado(){
        let empleados= await getEmpleado();
        let contenido = document.querySelector(`.tbody`)
        empleados.forEach((empleado)=>{
            let {id, nombre, sexo, sueldo} = empleado;
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <th scope="row">${id}</th>
            <td style="">${nombre}</td>
            <td style="">${sexo}</td>
            <td style="">${sueldo}</td>
            <td style=""><button type="button" data-empleado="${id}" class="delete">Despedir</button></td>
            `;
            contenido.appendChild(tr);
        })
}

validate
validateEmpleado
confirmDelete
}
