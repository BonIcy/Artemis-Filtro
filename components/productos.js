import { getProducto } from "../js/getProducto.js";
import { validate, validateProducto } from "../js/newProducto.js";
import { confirmDelete } from "../js/deleteProducto.js";
export function productos(){
    document.addEventListener("DOMContentLoaded", loadProducto);
    async function loadProducto(){
        let productos= await getProducto();
        let contenido = document.querySelector(`.tbody`)
        productos.forEach((producto)=>{
            let {id, nombre, categoria, precio} = producto;
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <th scope="row">${id}</th>
            <td style="">${categoria}</td>
            <td style="">${nombre}</td>
            <td style="">${precio}</td>
            <td style=""><button type="button" data-producto="${id}" class="delete">Borrar</button></td>
            `;
            contenido.appendChild(tr);
        })
}

validate
validateProducto
confirmDelete
}
