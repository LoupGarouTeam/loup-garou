import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class PlayersService {
  private socket = io.connect("http://localhost:4200");
  private players = Array;
  constructor() { }

  addPlayer(playerName: string){
    this.socket.emit('add-player',playerName);
  }

}
