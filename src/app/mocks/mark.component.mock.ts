import { MarkComponent } from '../components/mark/mark.component';
import { SimpleChanges, SimpleChange } from '@angular/core';

export class MarkComponentMock extends MarkComponent {
  public isMarkShowingOnHover(hovering: boolean): boolean {
    if (hovering) {
      this.showMark(null);
      return this.show;
    } else {
      this.hideMark(null);
      return this.show;
    }
  }

  public isMarkPlacedOnClick(): boolean {
    this.onMarkPlaced(null);
    return !this.unmarked;
  }

  public isMarkPlacedAsXOnXTurn(xTurn: boolean): boolean {
    // ensure the Mark Component hasn't had a mark placed on it yet.
    this.unmarked = true;
    // run marking code
    const change = new SimpleChange(null, xTurn, null);
    this.ngOnChanges({'xTurn': change});
    return this.markAsX;
  }
}
