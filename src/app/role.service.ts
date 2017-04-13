import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class RoleService {
  private url = 'http://localhost:3005';
	private socket :any = io(this.url);

  constructor() { }

  attribuerRole(players){
  /*  let players = [{ "name" : "Raymond", "role" : "undefined", "status" : 0},
    { "name" : "Franc", "role" : "undefined", "status" : 0}, { "name" : "Alexandre", "role" : "undefined", "status" : 0}
  , { "name" : "David", "role" : "undefined", "status" : 0}, { "name" : "Lucas", "role" : "undefined", "status" : 0},
{ "name" : "Denis", "role" : "undefined", "status" : 0}];*/

    let roles = {"lg" : 0, "v" : 0, "vo" : 1, "ch" : 0, "cu" : 0, "pf" : 0, "so" : 0};
    let nbrPlayers = players.length;

    if (nbrPlayers < 12)
    {
      roles["lg"] = 2;
    }
    else if(nbrPlayers < 17)
    {
      roles["lg"] = 3;
    }
    else{
      roles["lg"] = 4;
    }

    if(nbrPlayers > 8)
    {
      roles["cu"] = 1;
      roles["ch"] = 1;
    }

    if (nbrPlayers > 10)
    {
      roles["so"] = 1;
    }

    let nbrRolesDistribues = 0;

    for (var key in roles)
    {
        nbrRolesDistribues += roles[key];
    }

    roles["v"] = nbrPlayers - nbrRolesDistribues;
    let rolesDistribues = roles;

    players = this.shuffle(players);

    for (var i = 0; i<players.length; i++)
    {
      for (var key in rolesDistribues)
      {
        if (rolesDistribues[key] > 0)
        {
          players[i]["role"] = key;
          rolesDistribues[key] = rolesDistribues[key]-1;
          break;
        }
      }
    }

    players = this.shuffle(players);

    return players;

  }



  //Shuffle prends en paramètre un tableau et mélange l'ordre des éléments du
  //tableau de manière aléatoire
  shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}

}
