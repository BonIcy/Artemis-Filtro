let url= "http://localhost:4000/clientes"
export let getUser = async ()=>{
    try{
        let response = await fetch(url)
        let data = await response.json()
        return data
    }catch(error){
        console.log(error);
    }
}
export let newUser = async (user)=>{
    try{
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)})
    }catch(error){
        console.log(error)
    }
}
export let deleteUser = async(id)=>{
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href= "../pag_clientes/index.html"
    }catch(error){
        console.log(error)
    }
}

