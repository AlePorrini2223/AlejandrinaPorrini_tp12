console.log("Bienvenidos al sistema de venta de comida rápida");

//DECLARO VARIABLES

let carneParrilla = 1800;  
let pollo = 1500;            // tipo de hamburguesa
let veg = 1200;

let jamon = 30;
let queso = 25;
let salsaTomate = 5;
let mayonesa = 5;           // adicionales
let mostaza = 5;
let tomate = 15;
let lechuga = 10;
let cebolla = 10;

nombre = "Alejandrina";     // usuario
apellido = "Porrini";



// DECLARO PRIMER FUNCION - CALLBACK

function Hamburguesa(tipoHamburguesa, Jamon, Queso, SalsaTomate, Mayonesa, Mostaza, Tomate, Lechuga,Cebolla) {

    let precio = 0;

    switch(tipoHamburguesa){
        case "carne":
            precio += carneParrilla;
            break;

        case "pollo":
            precio += pollo
            break;

        case "veg":
            precio += veg;
            break;

        default:
            return console.log("Hamburguesa no disponible. Ingrese una opción válida");
    }

    if (Jamon) precio += jamon;
    if (Queso) precio += queso;
    if (SalsaTomate) precio += salsaTomate;
    if (Mayonesa) precio += mayonesa;
    if (Mostaza) precio += mostaza;
    if (Tomate) precio += tomate;
    if (Lechuga) precio += lechuga;
    if (Cebolla) precio += cebolla;
    return precio

}

// DECLARO FUNCION "FASTFOOD"
function fastFood(nombreUsuario,apellidoUsuario,tipoHamburguesa, Jamon, Queso, SalsaTomate, Mayonesa, Mostaza, Tomate, Lechuga, Cebolla) {

    let precioTotal = Hamburguesa(tipoHamburguesa, Jamon, Queso, SalsaTomate, Mayonesa, Mostaza, Tomate, Lechuga, Cebolla);

    console.log(`Estimado/a usuario/a ${nombreUsuario} ${apellidoUsuario}, el monto total a pagar es de: $ ${precioTotal}`);
}

 // PRUEBAS
let mensaje = fastFood(nombre,apellido,"carne",true, false, false, true, true, false, true, false);
//console.log(mensaje);


