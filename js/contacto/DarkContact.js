function DarkContact() {
    // body
    document.getElementById("body").classList.toggle("bodyDark");
    // navBar
    document.getElementById("navDark").classList.toggle("navDark");
    // cambio boton dark a lum
    document.getElementById("buttonDark").style.display = "none";
    document.getElementById("buttonBright").style.display = "block";

    const textItemsNav = document.getElementsByClassName("header-nav__liItems");
    for (let i = 0; i < textItemsNav.length; i++) {
        textItemsNav[i].classList.toggle("itemsDark");
    }
    // sumbenu
    document.getElementById("subMenu").classList.toggle("subMenuDark");
    const subItemsNav = document.getElementsByClassName("ulMenu__liSubItems dropdown-item");
    for (let i = 0; i < subItemsNav.length; i++) {
        subItemsNav[i].classList.toggle("subItemsDark");
    }
    // textos de cajas servicios
    const textInfo = document.getElementsByTagName("p");
    for (let i = 0; i < textInfo.length; i++) {
        textInfo[i].classList.toggle("p_infodark");
    }
    const textInfoSpan = document.getElementsByTagName("span");
    for (let i = 0; i < textInfoSpan.length; i++) {
        textInfoSpan[i].classList.toggle("spanDark");
    }
    const textInfoLabel = document.getElementsByTagName("label");
    for (let i = 0; i < textInfoLabel.length; i++) {
        textInfoLabel[i].classList.toggle("labelsDark");
    }
    // footer;
    document.getElementById("footer").classList.toggle("footerDark");
    const footerLinksNavDark = document.getElementsByClassName("footer_links");
    for (let i = 0; i < footerLinksNavDark.length; i++) {
        footerLinksNavDark[i].classList.toggle("footer__navDark");
    }
    const imgFooterDark = document.getElementsByClassName("footer__img-redes");
    for (let i = 0; i < imgFooterDark.length; i++) {
        imgFooterDark[i].classList.toggle("footer__img-redesDark");
    }
    // logos flotantes whatsapp
    document.getElementById("logFlotFace").classList.toggle("logFacDark");
    document.getElementById("logInstDark").classList.toggle("logInstDark");
    document.getElementById("logTwitDark").classList.toggle("logTwitDark");
    document.getElementById("logLinkDark").classList.toggle("logLinkDark");
    document.getElementById("logWhatsDark").classList.toggle("logWhatsDark");
}
