import { deleteProducto } from "./getProducto.js";
let eliminarDe = document.querySelector(`.lista`)
eliminarDe.addEventListener('click', confirmDelete)
export function confirmDelete(e) {
    if(e.target.classList.contains(`delete`)){
      let prodID = parseInt(e.target.dataset.producto);
      let confirmar = confirm(`¿Deseas eliminar el producto?`);
      if (confirmar) {
              deleteProducto(prodID);
            }
    }
}