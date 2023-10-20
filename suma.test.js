const {suma, resta, producto} = require('./suma');

test('sumar 1 + 2 es igual a 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('sumar 11 + 22 es igual a 33', () => {
    expect(suma(11, 22)).toBe(33);
});

test('restar 5 - 2  es igual a 3', () => {
    expect(resta(5, 2)).toBe(3);
  });
  
test('producto 4 * 3 es igual a 12', () => {
    expect(producto(4,3)).toBe(12);
});

test('producto 4 * 0 es igual a 0', () => {
    expect(producto(4,0)).toBe(0);
});