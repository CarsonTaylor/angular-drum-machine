import { Component, OnInit } from '@angular/core';
import { Sample } from '../sample';
import { SAMPLES } from '../samples';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css']
})
export class PadComponent implements OnInit {
  samples = SAMPLES;
  toggle = false;

  constructor() { }

  ngOnInit() {
  }

  sound(sample: Sample): void {
    let audio = new Audio();
    audio.src = sample.path;
    audio.load();
    audio.play();
    this.toggle = !this.toggle;
  }

}
