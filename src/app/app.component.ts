import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { PseudoService } from './pseudo.service';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PseudoService]

})
export class AppComponent implements OnInit {
  private url: string = 'http://localhost:3005';
  private socket: any;

  title = 'app works!';

  ngOnInit() {
    this.socket = io(this.url);
  }
}
