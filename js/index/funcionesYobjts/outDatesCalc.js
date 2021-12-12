function outDatesCalc (contNumKmDis,contValServi,createbDis,createbValor) {
    $("#contNumKmDis").css({display: "none"})
        $("#contValServ").css({display: "none"})
        $("#submitServmodCalcular").css({display: "inline-block"})
        $("#submitServmodConfirmar").css({display: "none"})
        document.querySelector("#inputDirUno").value = null;
        $("#inputDirUno").prop('disabled', false);
        $("#inputDirDos").prop('disabled', false);
        contNumKmDis.removeChild(createbDis)
        contValServi.removeChild(createbValor);
}