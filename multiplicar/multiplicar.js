const fs = require('fs');

let crearArchivo = (base, limite = 10) => { //module.exports.crearArchivo
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor de limite introducido ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`)
        });


    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let lista = '';

        if (!Number(base)) {
            reject(`El valor de base introducido ${base} no es un número`);
            return;
        } else if (!Number(limite)) {
            reject(`El valor de limite introducido ${limite} no es un número`);
            return;
        } else {
            for (let i = 1; i <= limite; i++) {
                lista += `${base}*${i}=${base*i}\n`;
            }
            resolve(lista);
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}