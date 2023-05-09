import { newCategorias } from "./getCategorias.js";
let formulario = document.querySelector("#agregarC");
formulario.addEventListener("submit", validateCategoria);

export function validateCategoria(e) {
    e.preventDefault();
    let nombre = document.querySelector("#nameC").value;
    let descripcion = document.querySelector("#descC").value;
    let categoria ={nombre, descripcion,};
    if (validate(categoria)){
        alert("Todos los campos son obligatorios");
        return;
    }
    newCategorias(categoria);
};
export function validate(obj){
    return !Object.values(obj).every(element => element!=="")
};