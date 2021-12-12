function addDarkIndex() {
    // body
    $("#body").toggleClass("bodyDark")
    // navBar
    $("#navDark").toggleClass("navDark")
    // nav y submenu
    $(".header-nav__liItems").toggleClass("itemsDark")
    $("#subMenu").toggleClass("subMenuDark")
    $(".ulMenu__liSubItems").toggleClass("subItemsDark")
    // btn reg y prim serv
    $(".div__parrafo-a").toggleClass("div__parrafo-a-dark")
    $(".div__parrafo-a-primServ").toggleClass("btnPrimServDark")
    // textos de cajas servicios
    $("p").toggleClass("pDark")
    // footer;
    $("#footer").toggleClass("footerDark");
    $(".footer_links").toggleClass("footer__navDark");
    $(".footer__img-redes").toggleClass("footer__img-redesDark");
    // logos flotantes whatsapp
    $("#logFlotFace").toggleClass("logFacDark");
    $("#logInstDark").toggleClass("logInstDark");
    $("#logTwitDark").toggleClass("logTwitDark");
    $("#logLinkDark").toggleClass("logLinkDark");
    $("#logWhatsDark").toggleClass("logWhatsDark");
    // boton flotantes right
    $("#buttonRegisRightDark").toggleClass("buttonRegisRightDark");
    $("#buttonDark").toggleClass("afterclick")
}

