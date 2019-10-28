import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(list: any[]) {
    if (!list || list.length === 0) {
      return [];
    }
    return list.sort();
  }

}
