import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowelsToNumbers'
})
export class VowelsToNumbersPipe implements PipeTransform {

  transform(value: string): string {
    return value
    .toLowerCase()
    .split('a').join('0')
    .split('e').join('1')
    .split('i').join('3')
    .split('o').join('4')
    .split('u').join('5')
    .toUpperCase();
  }

}
