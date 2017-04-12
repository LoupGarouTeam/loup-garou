import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

	public varTimer :any;
  public connection :any;

  constructor(private _boardService: BoardService) { }

  ngOnInit() {
    // setTimeout(function(){
    //    this.varTimer = this._boardService.getTimer(this.varTimer);
    // }.bind(this),1000);

    this._boardService.initTimer();

    this.connection = this._boardService.getTimer().subscribe(timer => {
      console.log(timer);
      this.varTimer = timer;
    });
        			


  }

}
