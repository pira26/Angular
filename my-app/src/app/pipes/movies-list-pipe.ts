import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MovieFilterPipe'
})
export class MovieFilterPipe implements PipeTransform {
  transform(movies: any, value: any): any {
    if(!movies || !value) {
      return movies;
    }
    return movies.filter((movie) => {
      for (let key in movie) {
        if ((movie[key]).toString().toLowerCase().includes(value.toLowerCase())) {
          return true;
        }
      }
      return false;
    });
  }
}
