import {Component} from '@angular/core';
import {PseudoService} from '../pseudo.service';

@Component({
    selector: 'app-lobby',
    templateUrl: './lobby.component.html',
    styleUrls: ['./lobby.component.css']
})
export class LobbyComponent {
    pseudo = this._pseudoService;
    players = []; // TODO regroupe tout les players en un tableau
    everyoneReady = true;

    constructor(private _pseudoService: PseudoService) {
        this.getPlayers();
    }

    // TODO : Récupérer les vrais joueurs avec socket io
    getPlayers() {
        for (var i = 1; i < 1; i++) {
           // this.players.push();
        }
    }

    startGame() {
        this.everyoneReady = true;
        for (var i = 0, len = this.players.length; i < len; i++) {
            if (this.players[i].ready == false) {
                this.everyoneReady = false;
                break;
            }
        }
        if (this.everyoneReady && this.players.length > 5) {
            // TODO : Appeler les components / services permettant de lancer la partie
            console.log('Le jeu peut commencer');
        }
    }

    playerReady() {
        if (this.pseudo.ready) {
            this.pseudo.ready = false;
        } else {
            this.pseudo.ready = true;
        }
        //this.pseudo.setReady(this.pseudo.ready);
        this.startGame();
    }

}
