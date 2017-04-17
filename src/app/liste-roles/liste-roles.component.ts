import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { ListeJoueursService } from '../liste-joueurs.service';

@Component({
  selector: 'app-liste-roles',
  templateUrl: './liste-roles.component.html',
  styleUrls: ['./liste-roles.component.css'],
  providers: [ListeJoueursService]
})
export class ListeRolesComponent implements OnInit {

  private connection :any;
  listUser :any;

  constructor(private _listeJoueurs: ListeJoueursService) { }

  ngOnInit() {

    this.connection = this._listeJoueurs.getListUser().subscribe(user => {
      this.listUser = user;
      console.log (this.listUser);
    });

  }

}
