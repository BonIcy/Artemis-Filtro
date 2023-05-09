import { getUser } from "../js/getUser.js";
import { validate, validateUser } from "../js/newUser.js";

export function user(){
    document.addEventListener("DOMContentLoaded", loadUser);
    async function loadUser(){
        let users= await getUser();
        let contenido = document.querySelector(`.tbody`)
        users.forEach((user)=>{
            let {id, nombre, correo} = user;
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <th scope="row">${id}</th>
            <td style="">${nombre}</td>
            <td style="">${correo}</td>
            `;
            contenido.appendChild(tr);
        })
}
validate
validateUser
}