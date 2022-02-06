function formValid(e) {
    switch (e.target.name) {
        case "nombre":
            if (ValidacionInputs.nombre.test(e.target.value)) {
                $("#fullNameInput").css({ "box-shadow": "none", "text-transform":"uppercase" });
                $(".mensErrorNombre").text("");
                contendo.nombre = true;
            } else {
                // $(".mensErrorNombre").text("tu nombre no puede estar vacio").css({ color: "#da0039" , height:"auto"});
                $("#fullNameInput").css({ "box-shadow": "2px 2px 10px 0px #da0039" });
                contendo.nombre = false;
            }
            break;
        case "email":
            if (ValidacionInputs.correo.test(e.target.value)) {
                $("#emialInput").css({ "box-shadow": "none" });
                $(".mensErrorEmail").text("");
                contendo.correo = true;
            } else {
                // $(".mensErrorEmail").text("ingresa un email valido").css({ color: "#da0039" , height:"auto"});
                $("#emialInput").css({ "box-shadow": "2px 2px 10px 0px #da0039" });
                contendo.correo = false;
            }
            break;
        case "phone":
            if (ValidacionInputs.telefono.test(e.target.value)) {
                $(".mensErrorPhone").text("");
                $("#phoneInput").css({ "box-shadow": "none" });
                contendo.telefono = true;
            } else {
                // $(".mensErrorPhone").text("ingresa un numero de telefono valido, entre 7 y 13 digitos.").css({ color: "#da0039", height:"auto"});
                $("#phoneInput").css({ "box-shadow": "2px 2px 10px 0px #da0039" });
                contendo.telefono = false;
            }
            break;
    }
}

function formValTextarea (e) {
    switch(e.target.name){
        case "mensaje":
        if(ValidacionInputs.mensaje.test(e.target.value)) {
            $(".mensErrorMensaje").text("")
            $("#textAreaInput").css({"box-shadow": "none"})
            contendo.mensaje = true
        } else {
            // $(".mensErrorMensaje").text("dejanos un mensaje (entre 1 y 500 caracteres)").css({color: "#da0039"})
            $("#textAreaInput").css({"box-shadow": "2px 2px 10px 0px #da0039"})
            contendo.mensaje = false
        }
        break;
    }  
}
