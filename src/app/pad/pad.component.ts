import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Sample } from '../sample';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  toggle = false;
  @Input() sample: Sample;
  @Input() row: number;
  @Output() isActive = new EventEmitter<number>();
  audio: HTMLAudioElement;

  constructor() { }

  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = this.sample.path;
  }

  sound(): void {
    this.audio.load();
    //this.audio.play();
    this.toggle = !this.toggle;
  }

  notifyIsActive() {
    this.isActive.emit(this.row)
  }

  comboMethod(){
    this.sound();
    this.notifyIsActive();
  }


}
