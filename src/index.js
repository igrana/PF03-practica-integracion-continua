 let fibonacci = function(n) {
    
    if (n < 0) {
        throw new RangeError ('solo números enteros >= 0');
    }
    if (n === 0) return 0;
    if (n === 1) return 1;


    return fibonacci(n-1) + fibonacci(n-2);
}

let esPinValido = function(pin) {
    if (pin === null || pin === undefined || pin === '')
        return false;
    if (pin.length !== 4 && pin.length !== 6)
        return false;
    if (!esDeNumeros(pin))
        return false;
    if (sonDigitosIguales(pin))
        return false;
    return true;
}

let esDeNumeros = function(cadena) {
    cadena = cadena.split('');
    let esNumero = true;

    cadena.forEach ((elemento) => {
        if (elemento !== '0' &&
            elemento !== '1' &&
            elemento !== '2' &&
            elemento !== '3' &&
            elemento !== '4' &&
            elemento !== '5' &&
            elemento !== '6' &&
            elemento !== '7' &&
            elemento !== '8' &&
            elemento !== '9'){
                esNumero = false;
            }
        })
    return esNumero;
}

let sonDigitosIguales = function(cadena) {
    cadena = cadena.split('');
    let esIgual = true;

    for (let i = 0; i < (cadena.length - 1); i++){ 
        if (cadena[i] !== cadena[i+1])
            esIgual = false;
    }
    return esIgual;
}

export {
    fibonacci,
    esPinValido
 }
 

 //*isgrpa2526 */