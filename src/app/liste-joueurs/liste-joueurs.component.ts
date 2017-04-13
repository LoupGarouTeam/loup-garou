import { Component, OnInit } from '@angular/core';
import {ListeJoueursService} from '../liste-joueurs.service';

@Component({
  selector: 'app-liste-joueurs',
  templateUrl: './liste-joueurs.component.html',
  styleUrls: ['./liste-joueurs.component.css'],
  providers: [ListeJoueursService]
})
export class ListeJoueursComponent implements OnInit {
  
  listUser: any;
  public connection :any;

  constructor(private _listeJoueurs: ListeJoueursService) { }

  ngOnInit() {

    this.listUser = this._listeJoueurs.getUser();

    this.connection = this._listeJoueurs.getListUser().subscribe(user => {
      this.listUser = user;
      console.log(this.listUser)
    });
    
  }

}
