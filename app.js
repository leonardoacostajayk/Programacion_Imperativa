const prompt = require("prompt-sync")({ sigint: true });
// let temperaturaExterior = 30;
// let estaLloviendo = true;
let piso=2;
let horaActual=16;
let horaApertura = 15;
let horaCierre = 20;
let cantidadQueso = "200 gr";
let temperaturaExterior = prompt("Ingrese Temperatura exterior: ");
console.log(`Temperatura afuera ${temperaturaExterior}`);
let estaLloviendo = prompt("Esta Lloviendo: 1 - Si , 0 - No")
