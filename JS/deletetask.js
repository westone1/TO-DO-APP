const borrartarea = () => {
    const icon = document.createElement("i")
    icon.classList.add("trashicon","fa-solid","fa-trash-can")
    icon.addEventListener("click",deletetask)
    return icon
}
const deletetask = (evento) => {
    const parent =  evento.target.parentElement
    parent.remove()
}

export default borrartarea