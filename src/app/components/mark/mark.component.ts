import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'mark-area', //tslint:disable-line
  templateUrl: './mark.component.html',
  styleUrls: [ './mark.component.css' ]
})
export class MarkComponent implements OnChanges {
  @Input() xTurn: boolean;
  @Input() boardIndex: Number;
  @Output() markPlaced = new EventEmitter();
  public show: Boolean = false;

  constructor() { }

  ngOnChanges(change: SimpleChanges) {
    this.xTurn = typeof change['xTurn'] !== 'undefined' ? change['xTurn'].currentValue : this.xTurn;
  }

  hideMark(event) {
    this.show = false;
  }

  showMark(event) {
    console.log(`Player X turn: ${this.xTurn}`);
    this.show = true;
  }

  onMarkPlaced(event) {
    console.log('mark placed!');
    this.markPlaced.emit(this.boardIndex);
  }
}
