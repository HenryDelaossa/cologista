class FormContact {
    constructor(fullName, email, phone, service, mssge) {
        this.fullName = fullName;
        this.email = email;
        this.phone = phone;
        this.service = service;
        this.mssge = mssge;
    }
};
 const contendo = {
	nombre: false,
	correo: false,
	telefono: false,
    servicio: false,
    mensaje: false
};
const ValidacionInputs = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/,
	telefono: /^\d{7,13}$/,
    servicio: /^[a-zA-ZÀ-ÿ\s.,;:]{1,50}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s.,;:]{1,500}$/
}
