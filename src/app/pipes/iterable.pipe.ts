import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'iterable' })
export class IterablePipe implements PipeTransform {
  transform(value: number): Number[] {
    console.log(value);
    const iterable: Number[] = [];
    for (let i = 0; i < value; i++) {
      iterable.push(i);
    }
    console.log(iterable);
    return iterable;
  }
}
