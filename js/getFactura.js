let url= "http://localhost:4000/compras"
export let getFactura = async ()=>{
    try{
        let response = await fetch(url)
        let data = await response.json()
        return data
    }catch(error){
        console.log(error);
    }
}