function modalIniSesion(contenedorModInSes, colorFondoModal,contenedorInfoUsuarioActivo ) {
    $("#body").css({ overflow: "hidden" });
    $(contenedorModInSes).append(`<div id="contModalIniSes" style="display: none; z-index: 110; position:fixed; width: 100%; height: 100%; top: 0; left: 0; margin:0 auto; background-color: #17171770 ">
                                    <div class="divContFormModalIniSes" id="divContFormModalIniSes">
                                        <div>
                                            <span class="" id="spanCloseModalIniSes">X</span>
                                        </div>
                                        <form class="formModalIniSes">
                                            <fieldset id="fieldsetIniSesModal"> 
                                                <h2 class="titMizona">Mi zona</h2>
                                                <div class="divInputsIniSes">
                                                    <label class="labeIniSes" id="labelemailIniSes" for="inputemailIniSes" name="labelemailIniSesion">Email</label>
                                                    <input type="text" name="inputemailIniSesion" class="inputIniSes" id="inputemailIniSes" placeholder="email@email.com" required>
                                                </div>
                                                <div class="divInputsIniSes">
                                                    <label class="labeIniSes" id="labelPaswwordIniSes" for="inputPaswwordIniSes" name="labelPaswwordIniSesion">Contraseña</label>
                                                    <input type="password" name="inputPaswwordIniSesion" class="inputIniSes" id="inputPaswwordIniSes" placeholder="contraseña" required>
                                                </div>
                                                <div class="divInputsIniSes" id="divPassword">
                                                    <button type="reset" class="resetInpIniSes" id="resetInpIniSes">Borrar</button>
                                                    <button type="submit" class="submitIniSes" id="submitIniSes">Ingresar</button>
                                                </div>
                                                <div class="linkRegMod">
                                                    <a class="linkRegistroMod" href="registro.html">Registrarme</a>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>`);
    // estilos con jquery al contenido del modal anterior
    $("#contModalIniSes").css({ display: "none", "z-index": "110", position: "fixed", width: "100%", height: "100%", top: "0", left: "0", margin: "0 auto", "background-color": colorFondoModal }).slideDown();
    $(".divContFormModalIniSes").css({ display: "none", "background-color": "#e5e5e5", width: "50%", position: "absolute", top: "50%", left: "50%", "border-radius": "5px 20px 5px 20px", transform: "translate(-50%, -50%)", "box-shadow": " 0px 0px 25px 0px #00000050" }).slideDown();
    $("#spanCloseModalIniSes").css({ margin: "5px", cursor: "pointer", transition: "300ms", padding: "10px" }).mouseenter(() => { $("#spanCloseModalIniSes").css({ color: "#da0039", "text-decoration": "underline" }); }).mouseout(() => { $("#spanCloseModalIniSes").css({ color: "#171717", "text-decoration": "none" }); });
    $(".titMizona").css({ "text-align": "center" });
    $(".labeIniSes").css({ display: "block" });
    $(".divInputsIniSes").css({ margin: "1rem", "text-align": "center" });
    $(".inputIniSes").css({ width: "80%", "text-align": "center" });
    $(".resetInpIniSes, .submitIniSes").css({ "background-color": "#da0039", color: "#d2d2d2", "font-weight": "bolder", "font-family": "Stick No Bills", border: "none", "border-radius": "1px 8px 1px 8px", "padding": "0.2rem 0.3rem", "box-shadow": "0px 1px 5px 0px #171717" });
    $(".linkRegMod").css({ "text-align": "center" });
    const contModalIniSes = document.querySelector("#contModalIniSes");
    const spanCloseModalIniSes = document.querySelector("#spanCloseModalIniSes");
    window.addEventListener("click", (e) => { if (e.target === contModalIniSes) { $(".divContFormModalIniSes").slideUp(); $("#contModalIniSes").slideUp(); $("#body").css({ overflow: "visible" }); }; });
    window.addEventListener("click", (e) => { if (e.target === spanCloseModalIniSes) { $(".divContFormModalIniSes").slideUp(); $("#contModalIniSes").slideUp(); $("#body").css({ overflow: "visible" }); }; });
    // usar esto en index para mostrar datos de local storage ⇊
    const btnSubmitIniSes = document.querySelector("#submitIniSes");
        let inputemailIniSes = null;
        let inputPaswwordIniSes = null;
        btnSubmitIniSes.addEventListener("click", (e)=> {
            e.preventDefault()
            inputemailIniSes = document.getElementById("inputemailIniSes").value;
            inputPaswwordIniSes = document.getElementById("inputPaswwordIniSes").value;
            // for (const usuar of users_nel ) {
            for (let i = 0; i < users_nel.length; i++ ) {
                if (inputemailIniSes === users_nel[i].email && inputPaswwordIniSes === users_nel[i].password) {
                    localStorage.setItem("usuarioActivo", JSON.stringify(users_nel[i]));
                    spinner("#body")
                    $("#contModalIniSes").hide()
                    setTimeout(()=> {
                        $(".contspinner").hide()
                        mensErrExiIniSes("#d2d2d2", `Hola ${users_nel[i].name}, Bienvenido a tu zona`, "1000")
                        $("#body").css({overflow: "visible"})
                    },2000)
                    setTimeout(()=> {
                        window.location.href = "index.html";
                        showDatesUserOld(contenedorInfoUsuarioActivo);
                    }, 4200)
                }  
            }
            if (inputemailIniSes !== users_nel.email && inputPaswwordIniSes !== users_nel.password) {
                $("#divPassword").append(`<p class="mErr">${users_nel[0].mensErr}</p>`).fadeIn(500)
                setTimeout(()=> {
                    $(".mErr").remove()
                },2000)
            }
        })
        
    

    
        
}
