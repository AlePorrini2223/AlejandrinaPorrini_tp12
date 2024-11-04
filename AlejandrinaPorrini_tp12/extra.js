// 1- FUNCION UPPERCONVERTER

function upperConverter(minuscula) {
    let mayusculas = minuscula.toUpperCase();
    return mayusculas
}
//console.log(upperConverter("hola mundo"));


// 2- FUNCION DATATYPE
function dataType(dato) {
    let tipoDato = typeof dato;
    return tipoDato;
}
//console.log(dataType(2024));



// 3- FUNCION DOGAGE
function dogAge(edad) {
    let edadPerruna = edad * 7;
    return edadPerruna;
}
//console.log(dogAge(2));



// 4- FUNCIÓN HOURPRICE
function hourPrice(salarioMensual,diasTrabajados,horasPorDia){
    let salario = (diasTrabajados * horasPorDia) / salarioMensual;
    return salario;
}
//console.log(hourPrice(3000000,28,12));


module.exports = {upperConverter, dataType, dogAge, hourPrice}
