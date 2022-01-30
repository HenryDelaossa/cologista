function spinner(contenedor) {
    $(contenedor).prepend(`<div class="contspinner" style="z-index: 1000"><div class="spinner"><div></div><div></div></div></div>`);
    $(".contspinner").css({position: "fixed", width: "100%", height: "100%", top: "0", left: "0", margin: "0 auto", "background-color": "transparent"})
    $(".spiner").show();
}
