import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayPauseService {
  play = false;
  reset = false;

  constructor() { }

  pause(){
    this.play = false;
  }

  start(){
    this.play = true;
  }

  getPlay(){
    return this.play;
  }
}
