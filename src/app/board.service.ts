import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class BoardService {

	private url = 'http://localhost:3005';
	private socket :any = io(this.url);

  constructor() {
  	console.log('ok');
  }

  initTimer(){

  		this.socket.emit('init-timer');
  }


  getTimer(){

  	let observable = new Observable(observer => {
  		this.socket.on('updateTimer', (timer :any) =>{
  			observer.next(timer);

  		});
  	});

  	return observable;
  }

}
