import {Component} from '@angular/core';

@Component({
    selector: 'app-lobby',
    templateUrl: './lobby.component.html',
    styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
    players = [];
    everyoneReady = true;

    constructor() {
        this.getPlayers();
    }

    // TODO : Récupérer les vrais joueurs avec socket io
    getPlayers() {
        for (var i = 1; i < 11; i++) {
            this.players.push(
                new Player(i, 'Name' + i)
            )
        }
    }

    startGame() {
        // TODO : Appeler les components / services permettant de lancer la partie
        console.log('Le jeu peut commencer');
    }

    playerReady() {
        this.everyoneReady = true;
        for (var i = 0, len = this.players.length; i < len; i++) {
            if (this.players[i].ready == false) {
                this.everyoneReady = false;
                break;
            }
        }
        if (this.everyoneReady && this.players.length > 5) {
            this.startGame();
        }
    }
}

// TODO : Classe qui sera remplacé par le service User/Player
class Player {
    id: number;
    name: string;
    ready: boolean;

    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.ready = true;
    }
}