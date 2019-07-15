import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PlayPauseService } from '../play-pause.service';
import { BeatMarkerService } from '../beat-marker.service';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {
  interval;
  @Output() beat = new EventEmitter<number>();

  constructor(private playPauseService: PlayPauseService, 
              private beatMarkerService: BeatMarkerService) { }

  ngOnInit() {
    this.startClick();
  }

  startClick(){
    this.interval = setInterval(() => { 
      if(this.playPauseService.getPlay())
        this.beat.emit(this.beatMarkerService.getBeat()); 
    },175)
  }
}
