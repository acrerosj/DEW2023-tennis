class Match {
    date;
    players = [];
    winner = null;

    constructor(date = new Date()) {
        if (date instanceof Date) {
            this.date = date;
        } else {
            const [day, month, year] = date.split('/');
            this.date = new Date([year, month, day].join('/'));
        }
    }

    insertPlayer(player) {
        if (this.players.length>=2) return false;
        
        this.players.push(player);
        return true;
        
    }

    setWinner(player) {
        if (this.players.includes(player)) {
            if (this.date < (new Date())) {
                this.winner = player;
                return true;
            }
        }

        return false;
    }
}

module.exports = Match;