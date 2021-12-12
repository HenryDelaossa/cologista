function createDivsServs(visServs, contPrinc, cont1) {
    $(cont1).css({width: "30%", margin: "1rem .5rem 1rem .5rem"})
    let tit = document.createElement("h3");
    $(tit).css({textAlign: "center"}).text(visServs.titServi())
    let imgn = document.createElement("img");
    $(imgn).attr("src", visServs.imgServi()).css({width: "50%", margin:"0 auto"});
    let prr = document.createElement("p");
    $(prr).attr("class", "pArr")
    $(prr).css({width:"80%", margin:"0 auto",textAlign:"justify" }).text(visServs.descrServi())
    $(cont1).append(tit, imgn, prr);
    $(contPrinc).append(cont1)
}