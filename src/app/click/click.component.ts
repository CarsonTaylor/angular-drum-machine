import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PlayPauseService } from '../play-pause.service';
import { VirtualTimeScheduler } from 'rxjs';
import { BeatMarkerService } from '../beat-marker.service';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {
  play: boolean;
  time: number = 1;
  interval;
  @Output() beat = new EventEmitter<number>();

  constructor(private playPauseService: PlayPauseService, 
              private beatMarkerService: BeatMarkerService) { }

  ngOnInit() {
    this.startClick();
  }

  startClick(){
    this.interval = setInterval(() => { 
      if(!this.playPauseService.getPlay())
        return;
      this.time++;
      if(this.time % 9 == 0)
        this.time = 1;
      this.beat.emit(this.time); 
      this.beatMarkerService.setBeat(this.time);
      console.log(this.beatMarkerService.getBeat()); 
    },350)
  }

  pauseClick(){
    this.play=false;
    clearInterval(this.interval);
  }

  resetClick(){
    this.play=false;
    clearInterval(this.interval);
    this.time = 1;
  }

}
