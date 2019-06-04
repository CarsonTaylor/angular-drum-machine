import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BeatMarkerService {
  beat: number = 1;

  constructor() { }

  getBeat(){
    return this.beat;
  }

  setBeat(beat: number){
    this.beat = beat;
  }

  incrementBeat(){
    this.beat++;
  }
}
