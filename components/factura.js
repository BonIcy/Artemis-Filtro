import { getFactura } from "../js/getFactura.js";
export function factura(){
    document.addEventListener("DOMContentLoaded", loadFactura);
    async function loadFactura(){
        let categorias= await getFactura();
        let contenido = document.querySelector(`.tbody`)
        categorias.forEach((factura)=>{
            let {id, cliente, empleado, fecha, producto, cantidad, productoN} = factura;
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <th scope="row">${id}</th>
            <td style="">${cliente}</td>
            <td style="">${empleado}</td>
            <td style="">${fecha}</td>
            <td style="">${producto}</td>
            <td style="">${cantidad}</td>
            `;
            contenido.appendChild(tr);
        })
}

}