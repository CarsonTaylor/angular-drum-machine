import { Component, OnInit } from '@angular/core';
import { PlayPauseService } from '../play-pause.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {
  play: boolean;
  time: number = 1;
  interval;

  constructor(private playPauseService: PlayPauseService) { }

  ngOnInit() {
    this.play = false;
  }

  start(){
    this.playPauseService.start();
  }

  pause(){
    this.playPauseService.pause();
  }
}
