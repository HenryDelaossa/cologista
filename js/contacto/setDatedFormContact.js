function setDatedFormContact() {
    fullName = document.querySelector("#fullNameInput").value;
    email = document.querySelector("#emialInput").value;
    phone = document.querySelector("#phoneInput").value;
    service = document.querySelector("#serviceSelect").value;
    mssge = document.querySelector("#textAreaInput").value;
    if (fullName && email && phone && service) {
        arrFin.push(new FormContact(fullName, email, phone, service, mssge));
        lista.push(new FormContact(fullName, email, phone, service, mssge))
        DivCardContact()  
    } else {
        alert("ingresa correctamente los datos")
    }
}
