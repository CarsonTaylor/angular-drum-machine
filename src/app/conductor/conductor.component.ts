import { Component, OnInit } from '@angular/core';
import { PlayPauseService } from '../play-pause.service';
import { BeatMarkerService } from '../beat-marker.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.component.html',
  styleUrls: ['./conductor.component.css']
})
export class ConductorComponent implements OnInit {
  interval;

  constructor(private playPauseService: PlayPauseService, 
              private beatMarkerService: BeatMarkerService) { }

  ngOnInit() {
  }

  start(){
    if(this.playPauseService.getPlay())
      return;
    this.playPauseService.start();
    this.beatMarkerService.incrementBeat();
  }

  pause(){
    this.playPauseService.pause();
    this.beatMarkerService.pauseClick();
  }
}
