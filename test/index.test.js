import { describe, it, expect } from 'vitest'
import { esPinValido, fibonacci } from '../src/index.js'

describe('Funciones para practicar', () => {
    describe('Función Fibonacci', () => {
        it.each([
            [0, 0], //Para índice 0 es 0
            [1, 1], //Para índice 1 es 1
            [2, 1], //Para índice > 1 cada número es la suma de los dos anteriores
            [3, 2],
            [5, 5],
            [7, 13],
        ])('Secuencia de Fibonacci con índice %i -> %i', (n, expected) =>{
            expect(fibonacci(n)).toBe(expected)
        });
    
        it('Lanza RangeError cuando el índice es < 0', () => {
            expect(() => fibonacci(-1)).toThrow(RangeError)
        });
    })

    describe('Función esPinValido', () => {
        it.each([
            [null, false], //No puede ser null
            [undefined, false], //No puede ser undefined
            ['', false], //No puede estar vacío
            ['123', false], //Debe tener 4 o 6 dígitos
            ['12345', false],
            ['123H', false], //Solo dígitos 0-9
            ['1111', false], //Debe prohibirse que todos los dígitos sean iguales
            ['444444', false],
        ])('Pin introducido no válido %s devuelve --> false', (pin, expected) =>{
            expect(esPinValido(pin)).toStrictEqual(expected)
        });
        it.each([
            ['1234', true],
            ['123456', true],
        ])('Pin introducido válido %s devuelve --> true', (pin, expected) =>{
            expect(esPinValido(pin)).toStrictEqual(expected)
        });
    })
})

//isgrpa2526