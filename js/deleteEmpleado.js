import { deleteEmpleado } from "./getEmpleado.js";
let eliminarDe = document.querySelector(`.lista`)
eliminarDe.addEventListener('click', confirmDelete)
export function confirmDelete(e) {
    if(e.target.classList.contains(`delete`)){
      let empleadoID = parseInt(e.target.dataset.empleado);
      let confirmar = confirm(`¿Deseas despedir al empleado?`);
      if (confirmar) {
              deleteEmpleado(empleadoID);
            }
    }
}