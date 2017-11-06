/*To be expanded on later. Will have many more values but only the bare minumim for now*/

/*
  String: nickname not required
  String: name required - original name
  int id required - pokedex id
*/
class Pokemon {
    constructor(nickname, name, id) {
        if(this.checkNickname(nickname))
            this.nickname = nickname;
        this.name = name;
        this.id = id;
    }
    
    checkNickname(nickname) {
        console.log(nickname.length === 0 || !nickname.trim());
        return !(nickname.length === 0 || !nickname.trim());
    }
}

module.exports = Pokemon;