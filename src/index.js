 let fibonacci = function(n) {
    if (n < 0) {
        throw new RangeError ('solo números enteros >= 0');
        console.log('ha entrado en error');
    }
    if (n = 0)
        return 0;
    if (n = 1)
        return 1;

    if (n = 2)
        return 1 + 1;

    if (n = 3)
        return 2 + 1;
    if (n = 4)
        return fibonacci(3) + fibonacci(2);
    
    else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

console.log('prueba');
fibonacci(-1);

export {
    fibonacci
 }
 

 //*isgrpa2526 */