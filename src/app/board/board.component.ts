import { Component, OnInit } from '@angular/core';
import { BeatMarkerService } from '../beat-marker.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit{
  constructor(private beatMarkerService: BeatMarkerService) { }

  ngOnInit(){
    //this.beatMarkerService.incrementBeat();
  }
}
