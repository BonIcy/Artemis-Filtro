let url= "http://localhost:4000/productos"
export let getProducto = async ()=>{
    try{
        let response = await fetch(url)
        let data = await response.json()
        return data
    }catch(error){
        console.log(error);
    }
}
export let newProducto = async (producto)=>{
    try{
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)})
    }catch(error){
        console.log(error)
    }
}
export let deleteProducto = async(id)=>{
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href= "../pag_productos/index.html"
    }catch(error){
        console.log(error)
    }
}

