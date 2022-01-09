
function showValoresAndDist() {
    // tomo los valores de inputs
    let inputDirUno = document.getElementById("inputDirUno").value;
    let inputDirDos = document.getElementById("inputDirDos").value;
    // valores calculo de servicios
    let valorMinimo = 5500;
    let valorTot
    let valorKm = 1250;
    const dist = Math.floor(Math.random(1,40) * (40 - 1)) + 1;
    arrDist.push(dist)
    $("#contNumKmDis").text("")
    $("#contValServ").text("")
    if (inputDirUno && inputDirDos) {
        createbDis.innerHTML = (`${arrDist[arrDist.length - 1]}`);
        contNumKmDis.appendChild(createbDis)
        if (arrDist[arrDist.length - 1] <= 4) {
            valorTot = valorMinimo
            createbValor.innerHTML = (`\$${Intl.NumberFormat().format(valorTot)}`);
            contValServi.appendChild(createbValor);
        } else if (arrDist[arrDist.length - 1] >= 20) {
            valorTot = (arrDist[arrDist.length - 1] * valorKm) * (0.9)
            createbValor.innerHTML = (`$${Intl.NumberFormat().format(valorTot)}`);
            $(contValServi).prepend(createbValor);
            $(contValServi).append(`<div> <p id="menDesct" style:"display: inline-block; font-weight: lighter;">Te aplicamos descuento de 10% ya que tu servicio supera los 20km en distancia</p></div>`)
            $("#menDesct").css({color:"#da0039"})
        } else {
            valorTot = arrDist[arrDist.length - 1]*valorKm
            createbValor.innerHTML = (`$${Intl.NumberFormat().format(valorTot)}`);
            $(contValServi).append(createbValor);
        }
        $("#inputDirUno").prop("disabled", true)
        $("#inputDirDos").prop("disabled", true)
        arrVal.push(valorTot)
        $("#submitServmodCalcular").hide()
        $("#submitServmodConfirmar").show()
    } else {
        alert("Ingresa dato correctamente");    
    }
    if (document.getElementById("contNumKmDis").style.display === "none" && document.getElementById("contValServ").style.display === "none" ) {
        $("#contNumKmDis").show()
        $("#contValServ").show()
    }
}
