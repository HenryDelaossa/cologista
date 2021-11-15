//simulador contacto cotizacion servicio
function contactPrincipal () {
    var nombre = window.prompt("Hola!, bienvenido a cologista colombia, ¿como te llamas?").toUpperCase ()

    while (nombre == null || nombre == "" || nombre == " ") {
        nombre = prompt("por favor ingresa un nombre para poder identificarte mejor").toUpperCase()
    }
    var edad = (prompt(`${nombre} ¿Que edad tienes?\n Escribe tu edad en numeros`)) ;
    
    while (isNaN(edad)|| edad== "") {
        edad = prompt(`${nombre}, ingresa tu edad esta vez usando teclado numerico`) ;
    } 
    if (edad < 18 ) { 
        alert (`${nombre}, debes ser mayor de 18 años para solicitar uno de nuestros servicios`);
    } else {
        var servicio = prompt(`Hola ${nombre}, escribe el servicio en que estas interesado`).toUpperCase();
        while (servicio == "" || servicio == " ") {
            servicio = prompt(`Hola ${nombre}, escribe el servicio en que estas interesado, si no recuerdas el nombre puedes resumirlo o explicarlo`).toUpperCase();
        }
        var contactoCotiz = parseInt(prompt("dejanos tu numero de contacto y te llamaremos enseguida"));
        while (isNaN(contactoCotiz)) {
            contactoCotiz = parseInt(prompt("dejanos tu numero de contacto y te llamaremos enseguida \n Esta vez usa tu teclado numerico"));
        }
        alert(`${nombre}!!, te pondremos en contacto con un asesor, te llamara al numero: **${contactoCotiz}**,  y te ayudara en tus solicitudes e inquietudes sobre el servidio: "${servicio}" \nda click en aceptar para confirmar la llamada`) ;
    } 
}

//simulador para calcular promedio de servicios facturados

function promediosServ() {
    let confirmar = confirm("para calcular el promedio en pesos de tus servicios durante la ultima semana da click en aceptar, de lo contrario en cancelar");
    let promFinal = 0
    let acomul = 0
    let valores = 0
    if(confirmar === true) {
        let cant = parseInt(prompt("ingresa la cantidad de servicios facturados"))
        if(isNaN(cant)) {
            alert("No has ingresado un valor numerico correcto, intenta de nuevo")
        } else {
            for (let i = 1; i <= cant; i++) {
            valores = parseInt(prompt("valor " + i));
            acomul = parseInt(acomul) + valores;          
            }
            promFinal = acomul / cant;
            alert("el promedio en pesos de tus servicios durante esta semana fue de: " + "$" + promFinal)   
        }     
    }
}

//ismulador calculadora de servicios de acuerdo a distancia de recorrido 

function calcValServ () {
    
    alert("Vamos a calcular el valor de un servicio de mensajeria acorde a la distancia recorrida")
    let distancia = parseInt(prompt("ingresa los kilometros aproximados del recorrido de tu envio"));
    let ganMens = 0.8;
    let direccion1;
    let direccion2;

    //funcion datos de direcciones (interna de calcServ).⇊
    function datosServ() {
        direccion1 = prompt("ingresa la direccion INICIAL de recogida donde te enviaremos al mejor mensajero").toUpperCase()
        while (direccion1 == "" || direccion1 == " " || direccion1 == "  " ) {
            direccion1 = prompt("ingresa la direccion INICIAL de recogida donde te enviaremos al mejor mensajero").toUpperCase()
        }
        direccion2 = prompt("Ingresa la direccion de FINAL donde ira despues tu mensajero asignado").toUpperCase()
        while (direccion2 == "" || direccion2 == " " || direccion2 == "  " )  { 
            direccion2 = prompt("Ingresa la direccion de FINAL donde ira despues tu mensajero asignado").toUpperCase()
        } 
        alert(`Nuestro mejor mensajero va en camino a tu direccion: **${direccion1}** a recoger tu paquete o producto, luego se dirigira hacia la direccion: **${direccion2}** en donde sera entregado segun tus especificaciones, (recuerda darselas a tu mensajero asignado para mayor efectividad)`)
    }
    //funcion datos de direcciones (interna de calcServ) ⇈

    while (isNaN(distancia)) {
        distancia = parseInt(prompt("con tu teclado NUMERICO, ingresa los kilometros aproximados del recorrido de tu envio"));
    }
    if (distancia <= 4){
        let valor = 5500;
        let seguro = (valor - (valor * ganMens));
        let confirmarServ = confirm(`Valor mensajero: \$${Intl.NumberFormat().format(valor*ganMens)}\nValor por seguro o flete: \$${Intl.NumberFormat().format(seguro)}\n\nValor TOTAL de tu servicio: \$${Intl.NumberFormat().format(valor)}\n\nDa click en aceptar para confirmar y enviarte uno de nuestros 500 mensajeros 🛵`);
        if (confirmarServ === false) {
            alert("recarga esta pagina para iniciar nuevamente")
        } else {  
            datosServ();              
        }       
    }
    else {
        let valor = distancia * 1250;
        let seguro = (valor - (valor * ganMens));
        let confirmarServ = confirm(`Valor mensajero: \$${Intl.NumberFormat().format(valor*ganMens)}\nValor por seguro o flete: \$${Intl.NumberFormat().format(seguro)}\n\nValor TOTAL de tu servicio: \$${Intl.NumberFormat().format(valor)}\n\nDa click en aceptar para confirmar y enviarte uno de nuestros 500 mensajeros 🛵`);
        if (confirmarServ === false) {
            alert("recarga esta pagina para iniciar nuevamente")
        } else{
            datosServ();    
        }   
    }
}
contactPrincipal ();
calcValServ();
promediosServ();