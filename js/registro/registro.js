let buttonDark = document.getElementById("buttonDark")
buttonDark.addEventListener("click", () => {
    addDark()
    if (document.body.classList.contains("bodyDark")) {
        localStorage.setItem("modo", "dark")
    } else {
        localStorage.setItem("modo", "sunn")
    }
});
// efecto sobre barra de navegacion principal
let alturaInicial = window.scrollY
window.addEventListener("scroll", () => {
    let altura = window.scrollY
    if(alturaInicial >= altura){$("#navDark").css({top: "0px"}); $("#contButtonDark").css({top: "48px"})} else {$("#navDark").css({top: "-70px"}); $("#contButtonDark").css({top: "10px"})}
    alturaInicial = altura
})