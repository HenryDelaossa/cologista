function selects(input, contenedorUlLis, lisSelect) {
    const inptslctser = document.querySelector(input);
    const liSelects = document.querySelectorAll(lisSelect);

    inptslctser.addEventListener("focus", () => {
        $(contenedorUlLis).slideDown();
    });
    liSelects.forEach((click) => {
        click.addEventListener("click", (e) => {
            let textslct = e.target.innerText.toUpperCase();
            inptslctser.value = textslct;
            $(contenedorUlLis).hide();
            contendo.servicio = true;
            validInpt.pais = true
        });
    });
}
