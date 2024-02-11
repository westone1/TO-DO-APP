
const checkcomplete = () => {
    const checkbox = document.createElement("i")
    checkbox.classList.add("squareicon","fa-regular","fa-square")
    checkbox.addEventListener("click",completetask)
    return checkbox
    
    }
    const completetask = (evento) => {
    const element = evento.target
    element.classList.toggle("fa-square-check")
    element.classList.toggle("fa-square")
    
    }

export default checkcomplete
