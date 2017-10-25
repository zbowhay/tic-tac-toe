import { Component, Input } from '@angular/core';

@Component({
  selector: 'marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent {
  @Input('type') marker: Marker;

  constructor() { }
}


export enum Marker {
  Circle = 'circle',
  X = 'x'
}