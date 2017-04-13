import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ListeJoueursService {
  private url = 'http://localhost:3005';
	private socket :any = io(this.url);

  constructor() {
    console.log("dsqdqsd");
   }

  getUser(){
    console.log("TEST")
    this.socket.emit('list-user');
  }

  getListUser(){
let observable = new Observable(observer => {
      		this.socket.on('listUser', (listUser:any) =>{
      			observer.next(listUser);
      		});
      	})
        return observable;
  }


}
