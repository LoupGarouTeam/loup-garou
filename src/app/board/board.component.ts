// COMPONENTS
import { Component, OnInit } from '@angular/core';
import { TimerComponent } from '../timer/timer.component';
import { ListeJoueursComponent } from '../liste-joueurs/liste-joueurs.component';
import { TchatJoueursComponent } from '../tchat-joueurs/tchat-joueurs.component';
import { ListeRolesComponent } from '../liste-roles/liste-roles.component';


// SERVICES
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardService]
})
export class BoardComponent implements OnInit {

	public varTimer = 60;

  constructor(private _boardService: BoardService) { }

  ngOnInit() {



  }

}
