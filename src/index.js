 let fibonacci = function(n) {
    
    if (n < 0) {
        throw new RangeError ('solo números enteros >= 0');
    }
    if (n === 0) return 0;
    if (n === 1) return 1;


    return fibonacci(n-1) + fibonacci(n-2);
}

let esPinValido = function(pin) {
    //Evita null y undefined
    if (typeof pin !== 'string') return false;
    if (![4, 6].includes(pin.length)) return false;
    if (!esDeNumeros(pin)) return false;
    if (sonDigitosIguales(pin)) return false;
    return true;
}

let esDeNumeros = function(cadena) {
    return cadena.split('').every(caracter => '0123456789'.includes(caracter));
}

let sonDigitosIguales = function(cadena) {
    return cadena.split('').every(num => num === cadena[0]);
}

export {
    fibonacci,
    esPinValido
 }
 

 //*isgrpa2526 */