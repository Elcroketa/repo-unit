const palindromo = require('../utils/palindromo');

describe('Hacer palindromos', () => {
    test.each`
      Palabras        | Resultados    
      ${'hola'}       | ${'aloh'}
      ${'roma'}       | ${'amor'}
      ${'A'}          | ${'A'}
      
    `('$Palabras should return $Resultados', ({Palabras, Resultados}) => {
      expect(palindromo(Palabras)).toBe(Resultados);
    });
  });