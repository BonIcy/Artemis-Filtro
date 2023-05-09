import { newEmpleado } from "./getEmpleado.js";
let formulario = document.querySelector("#agregarE");
formulario.addEventListener("submit", validateEmpleado);

export function validateEmpleado(e) {
    e.preventDefault();
    let nombre = document.querySelector("#nameC").value;
    let sexo = document.querySelector("#sexo-select").value;
    let sueldo = document.querySelector("#sueldo").value;
    let empleado ={nombre, sexo, sueldo};
    if (validate(empleado)){
        alert("Todos los campos son obligatorios");
        return;
    }
    newEmpleado(empleado);
};
export function validate(obj){
    return !Object.values(obj).every(element => element!=="")
};