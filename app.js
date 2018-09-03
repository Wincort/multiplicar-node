const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite)
            .then(r => {
                console.log('========================='.green);
                console.log(`Tabla de ${argv.base}`.green);
                console.log('========================='.green);
                console.log(r);

            })
            .catch(e => console.log(e));

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

//console.log(argv);
//let argv2 = process.argv;
//console.log('Limite', argv.limite);
//console.log(argv2);
//let paramtero = argv[2];
//let base = paramtero.split('=')[1];
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));*/

/*const multiplicar = require('./multiplicar/multiplicar')
let base = 10;
multiplicar.crearArchivo*/
/*crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`));*/