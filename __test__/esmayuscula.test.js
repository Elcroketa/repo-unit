const isUpperCase  = require('../utils/esmayuscula');

test('es mayuscula?', () => {
    expect(isUpperCase('HOLA')).toBe(true);
})

test('es mayuscula?', () => {
    expect(isUpperCase('hola')).toBe(false);
})

test('es mayuscula?', () => {
    expect(isUpperCase('Hola')).toBe(false);
})