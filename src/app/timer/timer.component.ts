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

    this._boardService.initTimer();

    this.connection = this._boardService.getTimer().subscribe(timer => {
      this.varTimer = timer;
    });
        			


  }

}
