import { Component, OnInit, Input} from '@angular/core';
import { SAMPLES } from '../samples';

@Component({
  selector: 'app-padcolumn',
  templateUrl: './padcolumn.component.html',
  styleUrls: ['./padcolumn.component.css']
})
export class PadcolumnComponent implements OnInit {
  samples = SAMPLES;
  @Input() id: number;
  actives: boolean[];
  sounds: HTMLAudioElement[];
  size: string = '60px';
  toggle: boolean = false;

  constructor() { }

  ngOnInit() {
    this.actives = [false, false, false, false, false];
    this.sounds = [null, null, null, null, null];
    for(let i = 0; i < 5; i++){
      this.sounds[i] = new Audio();
      this.sounds[i].src = SAMPLES[i].path;
    }
  }

  setActives($event){
    let index = $event;
    this.actives[index] = !this.actives[index];
    //console.log(this.actives);
  }

  playColumn($event){
    if(this.id == $event){
      for(let i = 0; i < this.actives.length; i++){
        if(this.actives[i]){
          this.sounds[i].load();
          this.sounds[i].play();
        }
      }
      this.toggle = true;
    }
    else{
      this.toggle = false;
    }
  }

  getSize(){
    console.log("here");
    return this.size;
  }
}
