import { getCategorias } from "../js/getCategorias.js";
import { validate, validateCategoria } from "../js/newCategoria.js";
import { confirmDelete } from "../js/deleteCategoria.js";
export function categoria(){
    document.addEventListener("DOMContentLoaded", loadCategorias);
    async function loadCategorias(){
        let categorias= await getCategorias();
        let contenido = document.querySelector(`.tbody`)
        categorias.forEach((categoria)=>{
            let {id, nombre, descripcion} = categoria;
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <th scope="row">${id}</th>
            <td style="">${nombre}</td>
            <td style="">${descripcion}</td>
            <td style=""><button type="button" data-categoria="${id}" class="delete">Borrar</button></td>
            `;
            contenido.appendChild(tr);
        })
}
validate
validateCategoria
confirmDelete
}