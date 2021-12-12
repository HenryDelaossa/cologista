function addDark() {
    // body
    $("#body").toggleClass("bodyDark");
    // navBar
    $("#navDark").toggleClass("navDark");
    // nav y submenu
    $(".header-nav__liItems").toggleClass("itemsDark");
    $("#subMenu").toggleClass("subMenuDark");
    $(".ulMenu__liSubItems").toggleClass("subItemsDark");
    // lis
    $(".main-registro__li").toggleClass("main-registro__li-dark");
    $(".main-registro__ulmain-registro").toggleClass("beforeDarkreg")
    // btn reg y prim serv
    $(".div__parrafo-a").toggleClass("div__parrafo-a-dark");
    $(".div__parrafo-a-primServ").toggleClass("btnPrimServDark");
    // textos de cajas servicios
    $("p").toggleClass("pDark");
    // spans
    $(".main-contacto__span-contacto").toggleClass("spanDark");
    $(".span-negocio").toggleClass("span-negocio-dark")
    // labels
    $(".main-contacto__label").toggleClass("labelsDark");
    $(".main-registro-formulario__label").toggleClass("labelsDark");
    $(".main-registro-formulario__input-check-label").toggleClass("termCondDark")
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
    $("#buttonDark").toggleClass("afterclick");
    $("#btnActiContSerJs").css({border: "1px solid #da0039"});
}
