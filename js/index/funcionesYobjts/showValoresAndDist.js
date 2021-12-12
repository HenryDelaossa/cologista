
function showValoresAndDist() {
    let inputDirUno = document.getElementById("inputDirUno").value;
    let inputDirDos = document.getElementById("inputDirDos").value;
    let valorMinimo = 5500;
    let valorTot
    let valorKm = 1250;
    const dist = Math.floor(Math.random(1,20) * (20 - 1)) + 1;
    arrDist.push(dist)
    console.log(dist)
    console.log(arrDist)
    if (inputDirUno || inputDirDos) {
        createbDis.innerHTML = (`${arrDist[0]}`);
        contNumKmDis.appendChild(createbDis)
        if (arrDist[0] <= 4) {
            valorTot = valorMinimo
            createbValor.innerHTML = (`${Intl.NumberFormat().format(valorTot)}`);
            contValServi.appendChild(createbValor);
        } else {
            valorTot = arrDist[0] *valorKm
            createbValor.innerHTML = (`${Intl.NumberFormat().format(valorTot)}`);
            contValServi.appendChild(createbValor);
        }
        document.getElementById("inputDirUno").disabled = true;
        document.getElementById("inputDirDos").disabled = true;

        arrVal.push(valorTot)
        console.log(arrVal)
        document.getElementById("submitServmodCalcular").style.display = "none"
        document.getElementById("submitServmodConfirmar").style.display = "inline-block"
    } else {
        alert("Ingresa dato correctamente");
    }
    if (document.getElementById("contNumKmDis").style.display === "none" && document.getElementById("contValServ").style.display === "none" ) {
        document.getElementById("contNumKmDis").style.display = "inline-block"
        document.getElementById("contValServ").style.display = "inline-block"
    }
}
