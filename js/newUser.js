import { newUser } from "./getUser.js";
let formulario = document.querySelector("#agregarC");
formulario.addEventListener("submit", validateUser);

export function validateUser(e) {
    e.preventDefault();
    let nombre = document.querySelector("#nameC").value;
    let correo = document.querySelector("#correo").value;

    let user ={nombre, correo};
    if (validate(user)){
        alert("Todos los campos son obligatorios");
        return;
    }
    newUser(user);
};
export function validate(obj){
    return !Object.values(obj).every(element => element!=="")
};