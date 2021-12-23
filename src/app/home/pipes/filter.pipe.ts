import { Pipe, PipeTransform } from '@angular/core';
import { News } from 'src/app/models/news';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: News[] | null, filterString: string): News[] | null {
    if (!filterString) return list;
    return list!.filter((n) =>
      n.title.toLowerCase().includes(filterString.toLowerCase())
    );
  }
}
