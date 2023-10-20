const Match = require('./Match');

test('Crear un partido', () => {
    const Partido1 = new Match();
    expect(Partido1).toEqual({});
    expect(Partido1 instanceof Match).toBeTrue();
});