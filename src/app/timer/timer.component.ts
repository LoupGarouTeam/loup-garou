import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

	public varTimer = 60;

  constructor() { }

  ngOnInit() {


			this.initTimer();


  }

  initTimer(){
  	console.log(this.varTimer);
  	setTimeout(function(){
		if(this.varTimer > 0){

			this.varTimer -= 1;

			this.initTimer();
		


		}
	}.bind(this),1000);
  }

}
