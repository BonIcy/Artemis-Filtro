let url= "http://localhost:4000/categorias"
export let getCategorias = async ()=>{
    try{
        let response = await fetch(url)
        let data = await response.json()
        return data
    }catch(error){
        console.log(error);
    }
}
export let newCategorias = async (categoria)=>{
    try{
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(categoria)})
    }catch(error){
        console.log(error)
    }
}
export let deleteCategoria = async(id)=>{
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href= "../pag_categorias/index.html"
    }catch(error){
        console.log(error)
    }
}

