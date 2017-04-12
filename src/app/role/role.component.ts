import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [PlayersService]
})
export class RoleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
