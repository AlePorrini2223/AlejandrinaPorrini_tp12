
console.log("Bienvenido al Sistema de Rental Car");

function rentalCar(tipoDeVehiculo, diasDeAlquiler, sillaParaNiños){

    let valorPorDia;
    let valorTotal;

    switch (tipoDeVehiculo) {

        case "Compacto":
            valorPorDia = 14000;
            break;

        case "Mediano":
            valorPorDia = 17000;
            break;

        case "Camioneta":
            valorPorDia = 28000;
            break;            

        default:
            return console.log("Ingrese una opción válida");
    }

    switch (sillaParaNiños) {

        case "si":
            valorTotal = (valorPorDia + 1200) * diasDeAlquiler;
            console.log(`Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado, 
                considerando el/los ${diasDeAlquiler} utilizados, más el adicional de la silla para niños, 
                el monto total a pagar es de $ ${valorTotal}`);
            break;

        case "no":
            valorTotal = valorPorDia* diasDeAlquiler;
            console.log(`Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado, 
                considerando el/los ${diasDeAlquiler} utilizados, el monto total a pagar es de $ ${valorTotal}`);

        default:
            return console.log("Ingrese una opción válida");
    }
}

let respuesta = rentalCar();

//Asignando valores
/*
console.log(rentalCar("Compacto", 2, "si"));     // Vehiculo Compacto por 2 días con silla
console.log(rentalCar("Mediano", 3, "no"));     // Vehiculo Mediano por 3 días sin silla
console.log(rentalCar("Camioneta", 2, "no"));  // Vehiculo Camioneta por 2 días sin silla
console.log(rentalCar("Compacto", 3, " "));   // Mensaje default si no elije una opción válida
*/ 