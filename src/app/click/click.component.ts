import { Component, OnInit } from '@angular/core';
import { PadComponent } from '../pad/pad.component'

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {
  play: boolean;
  time: number = 0;
  interval;

  constructor() { }

  ngOnInit() {
    this.play = false;
  }

  startClick(){
    this.play = true;
    this.interval = setInterval(() => {
      this.time++;
    },500)
  }

  pauseClick(){
    this.play=false;
    clearInterval(this.interval);
  }

}
