class Services {
    constructor(tituloServ, imgServ, descrServ){
        this.tituloServ = tituloServ
        this.imgServ = imgServ
        this.descrServ = descrServ
    }
    titServi() {
        return `${this.tituloServ}`
    }
    imgServi() {
        return `${this.imgServ}`
    }
    descrServi() {
        return `${this.descrServ}`
    }
}