import { Injectable } from '@angular/core';
import { PlayPauseService } from './play-pause.service';

@Injectable({
  providedIn: 'root'
})
export class BeatMarkerService {
  beat: number = 1;
  interval;

  constructor(private playPauseService: PlayPauseService) { }

  getBeat(){
    return this.beat;
  }

  setBeat(beat: number){
    this.beat = beat;
  }

  incrementBeat(){
    this.interval = setInterval(() => { 
      if(!this.playPauseService.getPlay()){
        return;
      }
      this.beat++;
      if(this.beat % 9 == 0)
        this.beat = 1;
      console.log(this.beat); 
    },350)
  }

  pauseClick(){
    clearInterval(this.interval);
  }


}
