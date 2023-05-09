let wsMyHeader={
    listTitle(p1){
        return`
        <h1>${p1.name}</h1>`
    },
    listCont(p1){
        let plantilla="";
        p1.forEach((val,id)=>{
            plantilla+=`
            <li class="nav-item">
            <a href="${val.href}" class="nav-link">${val.name}</a>
          </li>`
        })
        return plantilla;
    }
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
})