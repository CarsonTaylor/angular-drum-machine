import { Component, OnInit } from '@angular/core';
import { SAMPLES } from '../samples';

@Component({
  selector: 'app-padcolumn',
  templateUrl: './padcolumn.component.html',
  styleUrls: ['./padcolumn.component.css']
})
export class PadcolumnComponent implements OnInit {
  samples = SAMPLES;

  constructor() { }

  ngOnInit() {
  }

}
