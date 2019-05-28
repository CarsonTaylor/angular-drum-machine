import { Component, OnInit, Input } from '@angular/core';
import { Sample } from '../sample';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  toggle = false;
  @Input() sample: Sample;

  constructor() { }

  ngOnInit() {
  }

  sound(): void {
    let audio = new Audio();
    audio.src = this.sample.path;
    audio.load();
    audio.play();
    this.toggle = !this.toggle;
  }



}
