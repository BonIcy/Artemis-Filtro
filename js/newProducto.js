import { newProducto } from "./getProducto.js";
let formulario = document.querySelector("#agregarP");
formulario.addEventListener("submit", validateProducto);

export function validateProducto(e) {
    e.preventDefault();
    let categoria = document.querySelector("#categoria-select").value
    let nombre = document.querySelector("#nameC").value;

    let precio = document.querySelector("#precC").value;
    let producto ={categoria, nombre, precio};
    if (validate(producto)){
        alert("Todos los campos son obligatorios");
        return;
    }
    newProducto(producto);
};
export function validate(obj){
    return !Object.values(obj).every(element => element!=="")
};