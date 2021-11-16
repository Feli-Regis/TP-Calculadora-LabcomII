/* 
 Trabajo Practico Laboratorio de programacion II
 Codigo JS 

 consigna:

 Requerimientos Técnicos y Funcionales 

 CAMPOS DE ENTRADA DEL FORMULARIO 
 La calculadora deberá permitir al usuario cargar 3 campos diferentes para poder 
 realizar el cálculo del costo en pesos, los cuales son:

  ● Tipo de usuario (input radio de selección única): 
  ○ Residencial: aplica IVA 21% 
  ○ Industrial: aplica IVA 27% 

  ● Zona del domicilio (input select): 
  ○ Distrito Centro: $5,80 por kWh 
  ○ Distrito Sur: $5.40 por kWh 
  ○ Distrito Oeste: $5.35 por kWh 
  ○ Distrito Norte: $5.60 por kWh 
  
  ● Cantidad de kWh del mes (number) 

    VALIDACIONES
  Una vez que el usuario ingresa los 3 campos requeridos y presiona el botón 
  correspondiente para realizar el cálculo del costo, antes de realizar dicho 
  cálculo se deben realizar validaciones desde JavaScript para que se cumplan 
  las siguientes condiciones: 
  ● Tipo de usuario: es requerido que se seleccione alguna de las dos opciones 
  ● Zona del domicilio:  es requerido que se seleccione alguna de las 4 opciones 
  ● Cantidad de kWh del mes: el número que ingresa el usuario es requerido, 
  no debe ser 0 ni negativo. 
  Si no se cumple alguno de esos criterios, no se deberá continuar con el cálculo 
  y se deberá informar al usuario dicha situación. 

    CALCULO DEL COSTO / RESULTADO
  El resultado se debe calcular con la siguiente fórmula: 
  Total en $ = Costo de servicio + 
  (Cantidad de kWh * Costo según zona de domicilio) * (1 + IVA según Tipo de Usuario) 
  El costo de servicio debe definirse como un valor constante. 
  El valor actual es de 102 $/mes. 
  Ejemplo: un Residencial, con domicilio en el Distrito Centro y consumo de 60 kWh, 
  tomando el costo de servicio sugerido, debería pagar:
   102 $ + 60 kWh * 5.80 $/kWh * (1 + 0.21) = $ 523.08. 
 
 */

//costo fijo de servicio mensual
const costoServicio = 102;

let zona = {
    centro: 5.58,
    sur: 5.40,
    oeste: 5.35,
    norte: 5.60
};

let iva = {
    residencial: 0.21,
    industrial: 0.27
};

function datos(){
  let varPrueba
  varPrueba = document.getElementsByClassName("item-form").value;
  alert(varPrueba);
}


//funcion principal que calcula el monto a pagar y validacion
function calculadora(zona, iva, consumo) {
  if (consumo > 0) {
    return costoServicio + (consumo * zona) * (1 + iva);
  }
  else {
    //tirar alert de error
  }
};
//ejemplo //FUNCIONA
// pasaje12 = calculadora(zona.centro, iva.residencial, 120);
// console.log(pasaje12);
