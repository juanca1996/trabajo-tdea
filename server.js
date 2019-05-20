var argv = require('yargs')
                          .command('cursos','lista de cursos en el programa',)
                          .argv
                
var Cursos = [
    {
        alias:'m',
        id: 1,
        Nombre: 'Matematicas',
        duracionMinutos: 60,
        valor: 30000

    },
    {
        alias:'p',
        id: 2,
        Nombre: 'Programacion',
        duracionMinutos: 90,
        valor: 70000
    },
    {
        alias:'d',
        id: 3,
        Nombre: 'derecho',
        duracionMinutos: 40,
        valor: 20000
    },
    {
        alias:'me',
        id: 4,
        Nombre: 'Medicina',
        duracionMinutos: 120,
        valor: 70000
    },
    {
        alias:'c',
        id: 5,
        Nombre: 'Ciencias sociales',
        duracionMinutos: 40,
        valor: 40000
    }

]


var inscritos = [
    {
        nombreInteresado:"juan",
        cedula:"1152457540",
        idCurso: 1,
    }
]
function mostrarCursos(){
    for (let index = 0; index < Cursos.length; index++) {
        console.log(Cursos[index].Nombre +" id: "
        +Cursos[index].id+' time: '+Cursos[index].duracionMinutos+
        " valor: "+Cursos[index].valor);
        
    }
}

if(argv.c){
    mostrarCursos()
}else{
    if(argv.nombre)


    console.log("es c o cursos para ver los cursos")
}








