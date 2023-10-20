const Player = require('./Player');

test('Crear jugador', ()=>{
    const jugador1 = new Player('Pepe');
    expect(jugador1.name).toBe('Pepe');
    expect(jugador1).toEqual({name: 'Pepe', ranking: 0});
});

test('Crear jugador con ranking', ()=>{
    const jugador1 = new Player('Pepe', 7);
    expect(jugador1.ranking).toBe(7);
    jugador1.ranking = 9;
    expect(jugador1.ranking).toBe(9);
    expect(jugador1).toEqual({ranking: 9, name: 'Pepe'});
});