function ModalServ() {
    let ctnModal = document.getElementById("contModal")
    $("#contModal").slideDown("slow")
    $("#body").css({overflow: "hidden" })
    $("#spanCloseModal").click(() => {
        $("#contModal").hide("slow")
        $("#body").css({overflow: "visible" })
    });
    window.addEventListener("click", (e) => {
        if (e.target === ctnModal) {
            $("#contModal").fadeOut(400)
            $("#body").css({overflow: "visible" })
        }
    });
}

