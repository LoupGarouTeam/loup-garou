import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { ListeJoueursService } from '../liste-joueurs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [RoleService, ListeJoueursService]
})
export class RoleComponent implements OnInit {
  
  listeUser: any;
  public connection: any;
  
  constructor(private _roleService: RoleService, private _listeJoueurs: ListeJoueursService, private router: Router) { }

  ngOnInit() {
    
    this.listeUser = this._listeJoueurs.getUser();
    this.connection = this._listeJoueurs.getListUser().subscribe(user =>{
      this.listeUser = user;
      this._roleService.attribuerRole(this.listeUser);
      this.router.navigateByUrl('board');

    })

    
  }

}
