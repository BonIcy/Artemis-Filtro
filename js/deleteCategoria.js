import { deleteCategoria } from "./getCategorias.js";
let eliminarDe = document.querySelector(`.lista`)
eliminarDe.addEventListener('click', confirmDelete)
export function confirmDelete(e) {
    if(e.target.classList.contains(`delete`)){
      let categoriaID = parseInt(e.target.dataset.categoria);
      let confirmar = confirm(`¿Deseas eliminar a la categoria?`);
      if (confirmar) {
              deleteCategoria(categoriaID);
            }
    }
}