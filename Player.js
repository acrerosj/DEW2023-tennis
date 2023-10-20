class Player {
    name;
    ranking;

    constructor(name, ranking=0) {
        this.name = name;
        this.ranking = ranking;
    }
}

module.exports = Player;

// Esto son pruebas (ELIMINAR A PARTIR DE AQUI)
//  let player1 = new Player('Juan');
//  console.log(player1);
