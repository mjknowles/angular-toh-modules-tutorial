import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'awesome'
})
export class AwesomePipe implements PipeTransform {

  transform(phrase: string, args?: any): any {
    return phrase ? 'Awesome ' + phrase : '';
  }

}
