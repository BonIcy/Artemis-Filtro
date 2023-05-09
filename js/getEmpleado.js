let url= "http://localhost:4000/empleados"
export let getEmpleado = async ()=>{
    try{
        let response = await fetch(url)
        let data = await response.json()
        return data
    }catch(error){
        console.log(error);
    }
}
export let newEmpleado = async (empleado)=>{
    try{
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(empleado)})
    }catch(error){
        console.log(error)
    }
}
export let deleteEmpleado = async(id)=>{
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href= "../pag_usuarios/index.html"
    }catch(error){
        console.log(error)
    }
}

