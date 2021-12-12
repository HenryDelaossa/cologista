const buttonDark = document.getElementById("buttonDark")
buttonDark.addEventListener("click", () => {
    DarkContact()
    localStorage.setItem("modo", "darkContact")
})
const buttonBright = document.getElementById("buttonBright")
buttonBright.addEventListener("click", ()=> {
    buttonBright.removeEventListener("click", DarkContact())
    localStorage.setItem("modo", "lightContact")
    buttonBright.style.display = "none"
    buttonDark.style.display = "block"
})
if (localStorage.getItem("modo") === "darkContact") {
    DarkContact()
} else {
    remdar()
}
let arrFin = []
const lista = new Array()
let fullName = null
let email = null
let phone = null
let service = null
let mssge = null

let submitb = document.getElementById("submitContact")
submitb.addEventListener("click", (e)=> {
    e.preventDefault() 
    setDatedFormContact()
    console.log(arrFin)
    document.getElementById("formContact").reset()
    arrFin = []
    console.log(lista)
})

