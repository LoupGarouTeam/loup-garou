import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.css']
})
export class TchatComponent implements OnInit {
  showMessages:any;
  text:any;

  constructor() {}

  ngOnInit() {
    this.showMessages = []
  }

  addText(){
    this.showMessages.push({
      text: this.text
    })
  }

}
