import { Component, OnInit } from '@angular/core';
import { PseudoService } from '../pseudo.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  pseudo:string;

  constructor(private _pseudoService:PseudoService) { }

  ngOnInit() {
    this.pseudo = this._pseudoService.getPseudo();
  }

  submitPseudo(){
    this._pseudoService.addPseudo(this.pseudo);
  }

}
