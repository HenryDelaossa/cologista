// uso local storage para modo dark light index.html activada tipo onload desde index
function valueLocStorDark() {
    if (localStorage.getItem("modo") === "dark") {
        addDark()
    } else {
        remdark()
    }
}
