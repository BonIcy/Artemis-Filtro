export default {
    dataMyHeader(){
        localStorage.setItem(`myHeader`, JSON.stringify({
            title:{name:"Paginita"},
            cont:[
            {
                name:"Inicio",
                href:"../pag_inicio/index.html"
            },
            {
                name:"Categorias",
                href:"../pag_categorias/index.html"
            },
            {
                name:"Productos",
                href:"../pag_productos/index.html"
            },
            {
                name:"Clientes",
                href:"../pag_clientes/index.html"
            },
            {
                name:"Usuarios",
                href:"../pag_usuarios/index.html"
            },
            {
                name:"Ventas",
                href:"../pag_ventas/index.html"
            },
            {
                name:"Compras",
                href:"../pag_compras/index.html"
            },
            {
                name:"Reportes",
                href:"../pag_reportes/index.html"
            }
        ]
        }))
    }
}