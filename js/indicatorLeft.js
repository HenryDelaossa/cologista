function indicatorLeft (contenedor)  {
    $(contenedor).prepend(`<div class="barScrollHrztl" id="barScrollHrztl"> </div>`);
    document.addEventListener("scroll", ()=> {
        let height = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
        let barra = document.getElementById("barScrollHrztl");
        $(barra).css({width:"14px", height: `${height+"%"}`, border:"2px solid #da0039", position:"fixed", top:"unset", left:"0", bottom:"0", "background-color":"#171717"});
        // barra.style.height = height+"%"
    })
    
}