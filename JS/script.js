    import checkcomplete from "../JS/checkcomplete.js"
    import borrartarea from "../JS/deletetask.js"

    const list = document.querySelector("[data-list]") 
    const button = document.querySelector("[data-addbutton]")   
    const card = document.querySelector("[data-itemlist]")

    button.addEventListener("click",()=>{
        const input = document.querySelector("[data-textinput]")
        let usertext = input.value   
        let item = document.createElement("div")
        item.classList.add("mainbody__mainbox__card")

        const textobox= document.createElement("span")
        textobox.classList.add("mainbody__mainbox__card__usertext")

        if(usertext === ""){
            alert("El campo de texto no puede estar vacio")
        }else{
            textobox.innerText = usertext
            card.appendChild(item)
            item.appendChild(borrartarea())
            item.appendChild(checkcomplete())
            item.appendChild(textobox)
        }
        
        console.log(usertext)
    })

    

       
    
    
  






