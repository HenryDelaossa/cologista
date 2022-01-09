function scrollEffect (alturaInicial, altura) {
    if(alturaInicial >= altura){$("#navDark").css({top: "0px"}); $("#contButtonDark").css({top: "48px"})} else {$("#navDark").css({top: "-70px"}); $("#contButtonDark").css({top: "10px"})}
}