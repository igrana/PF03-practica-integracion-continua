import { describe, it, expect } from 'vitest'
import { fibonacci } from '../src/index.js'

describe('Funciones para practicar', () => {
    it.for([
        [0, 0],
        [1, 1],
        [2, 1],
        [3, 2],
        [5, 5],
        [7, 13],
    ])('Secuencia de Fibonacci con índice %i -> %i', (n, expected) =>{
        expect(fibonacci(n)).toBe(5)
    })

    it('Lanza RangeError cuando el índice es < 0', () => {
        expect(() => fibonacci(-1)).toThrow(RangeError)
    })
})