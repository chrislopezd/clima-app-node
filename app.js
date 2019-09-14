const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
/*lugar.getLugarLatLng(argv.direccion).then((resp) => {
    console.log(resp);
}).catch((err) => {
    console.log(err);
});*/
/*
clima.getClima(32.660000, -114.919998).then((resp) => {
    console.log(resp);
}).catch((err) => {
    console.log(err);
});*/

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de  ${ coords.direccion } es de ${ temp }`;
    } catch (e) {
        return `No se pudo determinar el Clima de  ${ direccion }`;
    }
};

getInfo(argv.direccion).then((resp) => {
    console.log(resp);
}).catch((err) => {
    console.log(err);
});