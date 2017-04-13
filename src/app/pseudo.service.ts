import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class PseudoService {

  private url = 'http://localhost:3005';
  private socket :any = io(this.url);
  public ready = false;

  constructor() {
    console.log("Stockage des utilisateurs")
  }

  getPseudo(){
    let pseudo = localStorage.getItem('pseudo')
    return pseudo;
  }

  addPseudo(newPseudo :string){
    localStorage.setItem('user', newPseudo);
    this.socket.emit('init-pseudo', newPseudo);
  }

  /*
  addPseudo(newPseudo){
    localStorage.setItem('pseudo', newPseudo);
    this.socket.emit('init-pseudo', newPseudo);
  }*/

}
