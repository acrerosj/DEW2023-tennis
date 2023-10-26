class Player {
    name;
    ranking;
    #gender;
    birthday;

    constructor(name, ranking=0, gender = 'female', birthday) {
        this.name = name;
        this.ranking = ranking;

        if (gender=='male') this.#gender = 'male';
        else this.#gender = 'female';

        if (birthday) {
            let [d,m,y] = birthday.split('/');
            if (!isNaN(new Date(y,m-1,d))) {
                this.birthday = birthday;
            }
        }
    }

    get gender() { return this.#gender; }

    get age() {
        if (!this.birthday) return undefined;
        let now = new Date();
        let [d,m,y] = this.birthday.split('/');
        let date = new Date(y,m-1,d);
        let diff = now.getFullYear() - date.getFullYear();
        if (now.getMonth() < date.getMonth()) diff--;
        if (now.getMonth() == date.getMonth() && now.getDay() < date.getDay()) diff--;
        return diff;
    }

    get category() {
        if (this.age < 12) return "Benjamin";
        if (this.age <=15 ) return "Cadet";
        if (this.age <=19) return "Junior";
        return "Senior";
    }
 }

module.exports = Player;

// Esto son pruebas (ELIMINAR A PARTIR DE AQUI)
//  let player1 = new Player('Juan');
//  console.log(player1);
