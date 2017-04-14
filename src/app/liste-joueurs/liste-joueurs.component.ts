import { Component, OnInit } from '@angular/core';
import {ListeJoueursService} from '../liste-joueurs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css'],
  providers: [ListeJoueursService]
})
export class ListeJoueursComponent implements OnInit {
  
  listUser: any;
  public connection :any;
  public everyoneReady: boolean;

  constructor(private _listeJoueurs: ListeJoueursService, private router: Router) { }

  ngOnInit() {

    this.listUser = this._listeJoueurs.getUser();

    this.connection = this._listeJoueurs.getListUser().subscribe(user => {
      this.listUser = user;
      console.log(this.listUser)
    });
    
  }

  startGame(){
    this.everyoneReady = true;
    // TODO : Vérifier que tout le monde est prêt à voir plus tard
    /*
    for (var i = 0, len = this.listUser.length; i < len; i++) {
      if (this.listUser[i].ready == false) {
        this.everyoneReady = false;
        break;
      }
    }
    */
    if (this.everyoneReady && this.listUser.length > 5) {
      console.log('La partie va commencer !');
      this.router.navigateByUrl('board');
    } else{
      console.log('Il faut minimum 6 joueurs pour commencer !');
    }
  }

  /* Function à utiliser pour gérer les utilisateurs prêt
  playerReady() {
    if (this.pseudo.ready) {
      this.pseudo.setReady(false);
    } else {
      this.pseudo.setReady(true);
    }
    this.startGame();
  }
  */

}
