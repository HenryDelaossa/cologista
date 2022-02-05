class FormRegistro {
    constructor(Name, lastName, email, user,password, phone, country) {
        this.name = Name
        this.lastName = lastName
        this.email = email
        this.user = user
        this.password = password
        this.phone = phone
        this.country = country
    }
};
const validInpt = {
    nombre: false,
    apellido: false,
    correo: false,
    usuario: false,
    password: false,
    telefono: false,
    pais: false
}
const validarInputsRegist = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,80}$/,
	correo: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/,
    usuario: /^[a-zA-Z0-9]{4,16}$/,
    password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
	telefono: /^\d{7,13}$/,
    pais: /^[a-zA-ZÀ-ÿ\s.,;:]{1,50}$/
}
