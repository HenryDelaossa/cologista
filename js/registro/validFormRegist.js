// funcion para aplicar en validFormRegist
function validFormRegist(e) {
    switch (e.target.name) {
        case "nombreReg" :
            if (validarInputsRegist.nombre.test(e.target.value)) {
                paramvalidFormRegistTrue(".mensErrorNombreReg", "","#inputNombreReg", "uppercase")
                validInpt.nombre = true;
            } else {
                paramvalidFormRegistFalse(".mensErrorNombreReg", "", "#inputNombreReg")
                validInpt.nombre = false;
            }
        break;
        case "apellidoReg":
            if (validarInputsRegist.apellido.test(e.target.value)) { 
                paramvalidFormRegistTrue(".mensErrorapellidoReg", "","#inputapellidoReg", "uppercase")
                validInpt.apellido = true;
            } else {
                paramvalidFormRegistFalse(".mensErrorapellidoReg", "", "#inputapellidoReg")
                validInpt.apellido = false;
            }
        break;
        case "emailReg":
            if (validarInputsRegist.correo.test(e.target.value)) { 
                paramvalidFormRegistTrue(".mensErrorEmailReg", "","#inputEmailReg", "unset")
                validInpt.correo = true;
            } else {
                paramvalidFormRegistFalse(".mensErrorEmailReg", "", "#inputEmailReg")
                validInpt.correo = false;
            }
        break;
        case "usuarioReg":
            if (validarInputsRegist.usuario.test(e.target.value)) { 
                paramvalidFormRegistTrue(".mensErrorUsuarioReg", "","#ínputUsuarioReg", "unset")
                validInpt.usuario = true;
            } else {
                paramvalidFormRegistFalse(".mensErrorUsuarioReg", "tu nombre de usuario debe contener entre 4 y 16 caracteres incluyendo letras y numeros.", "#ínputUsuarioReg")
                validInpt.usuario = false;
            }
        break;
        case "contraseñaReg1":
            if (validarInputsRegist.password.test(e.target.value)) { 
                paramvalidFormRegistTrue(".mensErrorPassword1Reg", "","#inputcontraseñaReg1", "unset")
                validInpt.password = true;
            } else {
                paramvalidFormRegistFalse(".mensErrorPassword1Reg", "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.", "#inputcontraseñaReg1")
                validInpt.password = false;
            }  
            validContraseñas();
        break;
        case "contraseñaReg2":
            validContraseñas();
        break;
        case "telefonoReg":
            if (validarInputsRegist.telefono.test(e.target.value)) { 
                paramvalidFormRegistTrue(".mensErrorTelefonoReg", "","#inputTelefonoReg", "unset")
                validInpt.telefono = true;
            } else {
                paramvalidFormRegistFalse(".mensErrorTelefonoReg", "tu telefono debe ser en formato numerico y entre 7 y 14 digitos.", "#inputTelefonoReg")
                validInpt.telefono = false;
            }
        break;
    }
}
// caso exito
const paramvalidFormRegistTrue  = ( elementoi,textElementiCorrect ,elementoBoxShadow, uppercase ) => {
        $(elementoi).text(textElementiCorrect);
        $(elementoBoxShadow).css({ "box-shadow": "none", "text-transform":uppercase });
}
// caso error
const paramvalidFormRegistFalse = (elementoi, textElementiError, elementoBoxShadow) => {
    $(elementoi).text(textElementiError).css({ color: "#da0039", height:"auto"});
    $(elementoBoxShadow).css({ "box-shadow": "2px 2px 10px 0px #da0039" });
}
// funcion validar contraseñas 
const validContraseñas = () => {
    const contras1 = document.getElementById("inputcontraseñaReg1").value;
    const contras2 = document.getElementById("inputcontraseñaReg2").value;
    if (contras1 !== contras2) {
        $(".mensErrorPassword2Reg").text("Las contraseñas no coinciden").css({ color: "#da0039" });
        $("#inputcontraseñaReg2").css({ "box-shadow": "2px 2px 10px 0px #da0039" });
    } else {
        $(".mensErrorPassword2Reg").text("");
        $("#inputcontraseñaReg2").css({ "box-shadow":"none"});
    }
}
