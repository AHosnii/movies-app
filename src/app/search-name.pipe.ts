import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(movies: any[], term: string): any {
    if (term == undefined) {
      return movies;
    }
    return movies.filter(function(movies){
      return movies.name.toLowerCase().includes(term.toLowerCase());
    })
  }

}
