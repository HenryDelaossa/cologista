function mensErrExiIniSes(colorFondoContenedorMensaje, textoDeMensaje, zindex) {
    $(".contMenErrInsSes").append(`<div class="contenedorMensaje">
                                    <p class="textoDeMensaje">${textoDeMensaje}</p>
                                </div>`);
    $(".contMenErrInsSes").css({ width: "100%", height: "100%", position: "fixed", top: "0", left: "0", "background-color": "transparet", "z-index": zindex }).slideDown();
    $(".contenedorMensaje").css({ width: "20%", height: "10%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", "background-color": colorFondoContenedorMensaje, "border-radius": "5px 20px 5px 20px", "box-shadow": "0px 0px 25px 0px #00000050", border: "2px solid #da0039" });

    $(".textoDeMensaje").css({ color: "#da0039", "text-align": "center", margin: "1rem 0 0 0"});
    setTimeout(() => {
        $(".contMenErrInsSes").hide();
        $(".textoDeMensaje").text("");
    }, 3000);
}
