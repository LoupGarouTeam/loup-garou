import { Injectable } from '@angular/core';

@Injectable()
export class PseudoService {

  constructor() {
    console.log("Stockage des utilisateurs")
  }

  getPseudo(){
    let pseudo = localStorage.getItem('pseudo')
    return pseudo;
  }

  addPseudo(newPseudo){
    localStorage.setItem('pseudo', newPseudo);
  }

}
