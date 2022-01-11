
// simulare un inicio de sesion con usuarios creados desde js
// asigno el valor menserr para solucionar un problema logico que tenia con el informe de error en caso de que los datos ingresados al iniciar sesion no fuesen correctos
const users_nel = [
    {name: "Henry David", lastName: "De la ossa Gomez", email: "delaossah@gmail.com",  user: "HenryDelGo",password: "SoyHenry90", phone:`${Math.floor((Math.random() * (3210000000-3010000000)) +3010000000)}`, country: "Colombia",  mensErr: "Datos incorrectos, valida nuevamente" },
    {name: "Maria nelcy", lastName: "Gomez Carreño",  email: "Marnelcy@gmail.com",user: "MarNelcy", password: "mariNelcy68", phone:`${Math.floor((Math.random() * (3210000000-3010000000)) +3010000000)}`, country: "Colombia"},
    {name: "Maria Camila", lastName: "Villamizar Gomez",  email: "MiCaRei09@gmail.com", user: "MiCamiReina",password: "CamiReinaFea09",  phone:`${Math.floor((Math.random() * (3210000000-3010000000)) +3010000000)}`, country: "Colombia"},
    {name: "Karen Sofia", lastName: "De la ossa hernandez",  email: "KarenSoft@gmail.com",user: "KarenSoft", password: "ShofiDlo18", phone:`${Math.floor((Math.random() * (3210000000-3010000000)) +3010000000)}`, country: "Colombia"},
    {name: "Rafael Arturo", lastName: "De la ossa hernandez",  email: "Rafiño20@gmail.com",user: "Rafiño", password: "ElViejoRaf20", phone:`${Math.floor((Math.random() * (3210000000-3010000000)) +3010000000)}`, country: "Colombia"},
    {name: "Jesus Alberto", lastName: "De la ossa Gomez",  email: "jesusDelGo@gmail.com",user: "jesusDelGo", password: "ChuchoDel95", phone:`${Math.floor((Math.random() * (3210000000-3010000000)) +3010000000)}`, country: "Colombia"},
    {name: "Nicolas", lastName: "Martini",  email: "nicomartini@gmail.com",user: "ElprofeMartini", password: "nicoMartin", phone:`${Math.floor((Math.random() * (3210000000-3010000000)) +3010000000)}`, country: "Argentina"}
]
