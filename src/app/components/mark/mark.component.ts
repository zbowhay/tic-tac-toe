import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'mark-area', //tslint:disable-line
  templateUrl: './mark.component.html',
  styleUrls: [ './mark.component.css' ]
})
export class MarkComponent implements OnChanges {
  @Input() xTurn: boolean;
  @Input() boardIndex: number;
  @Output() markPlaced = new EventEmitter();
  private show = false;
  private unmarked = true;
  private markAsX: boolean;

  constructor() { }

  ngOnChanges(change: SimpleChanges) {
    if (this.unmarked) {
      this.markAsX = typeof change['xTurn'] !== 'undefined' ? change['xTurn'].currentValue : this.xTurn;
    }
  }

  onMarkPlaced(event) {
    if (this.unmarked) {
      this.unmarked = false;
      this.markPlaced.emit(this.boardIndex);
    }
  }

  hideMark(event) {
    this.show = false;
  }

  showMark(event) {
    this.show = true;
  }

}
