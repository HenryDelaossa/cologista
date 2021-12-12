function ModalServ() {
    let body = document.getElementById("body")
    let spanCloseModal = document.getElementById("spanCloseModal")
    let ctnModal = document.getElementById("contModal")
    ctnModal.style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    spanCloseModal.addEventListener("click", (e) => {
        ctnModal.style.display = "none";
        body.style.overflow = "visible";
    });
    window.addEventListener("click", (e) => {
        if (e.target == ctnModal) {
            ctnModal.style.display = "none";
            body.style.overflow = "visible";
        }
    });
}


