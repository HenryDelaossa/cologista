function spinner(contenedor) {
    $(contenedor).prepend(`<div class="contspinner" style="z-index: 1000"><div class="spiner"></div></div>`);
    $(".contspinner").css({position: "fixed", width: "100%", height: "100%", top: "0", left: "0", margin: "0 auto", "background-color": "transparent"})
    $(".spiner").css({"z-index": "3000",display: "none", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", border: "5px solid #da0039", width: "50px", height: "50px", "border-radius": "50%", "border-left-color": "#d2d2d2", Animation: "spiner 1s ease infinite" }).show();
}
