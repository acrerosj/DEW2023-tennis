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

test('Crear jugador male', ()=>{
    const jugador1 = new Player('Pepe', 5, 'male');
    expect(jugador1.name).toBe('Pepe');
    expect(jugador1.gender).toBe('male');
});

test('Crear jugador female', ()=>{
    const jugador1 = new Player('Ana', 3, 'female');
    expect(jugador1.name).toBe('Ana');
    expect(jugador1.gender).toBe('female');
});

test('Crear jugador female sin indicar el género', ()=>{
    const jugador1 = new Player('Ana');
    expect(jugador1.name).toBe('Ana');
    expect(jugador1.gender).toBe('female');
});

test('Crear jugador female por poner un género extraño', ()=>{
    const jugador1 = new Player('Ana', 2,  'kkfu');
    expect(jugador1.name).toBe('Ana');
    expect(jugador1.gender).toBe('female');
});

test('Crear jugador con fecha nacimiento válida', ()=>{
    const jugador1 = new Player('Ana', 2,  'female', '13/04/1999');
    expect(jugador1.birthday).toBe('13/04/1999');
});

test('Crear jugador con fecha nacimiento no válida', ()=>{
    const jugador1 = new Player('Ana', 2,  'female', 'kkfu');
    expect(jugador1.birthday).not.toBe('kkfu');
    expect(jugador1.birthday).toBeUndefined()
    expect(jugador1.age).toBeUndefined();
});

test('Crear jugador con fecha nacimiento válida pero no ha cumplido este año', ()=>{
    const jugador1 = new Player('Ana', 2,  'female', '28/10/2000');
    expect(jugador1.age).toBe(22);
});

test('Jugador benjamin', ()=>{
    const jugador = new Player('pepe', 1, 'male', '12/12/2016');
    expect(jugador.category).toBe('Benjamin');
});

test('Jugador cadet', ()=>{
    const jugador = new Player('pepe', 1, 'male', '1/1/2010');
    expect(jugador.category).toBe('Cadet');
});

test('Jugador Junior', ()=>{
    const jugador = new Player('pepe', 1, 'male', '1/1/2004');
    expect(jugador.category).toBe('Junior');
});

test('Jugador senior', ()=>{
    const jugador = new Player('pepe', 1, 'male', '12/12/2000');
    expect(jugador.category).toBe('Senior');
})