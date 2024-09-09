// import { Component } from '@angular/core';
// import { MovieService } from '../movie.service';

// @Component({
//   selector: 'app-tv',
//   templateUrl: './tv.component.html',
//   styleUrls: ['./tv.component.scss']
// })
// export class TvComponent {
//   tvs: any = [];
//   pageNumbers: number[] = [];
//   currentPage = 1;
//   term: string;

//   constructor(public _MovieService: MovieService) {
//     for (let i = 1; i < 11; i++)
//     {
//       this.pageNumbers.push(i);
//     }

//     _MovieService.getTv(this.currentPage).subscribe((data) => {
//       return this.tvs = data.results;
//     })
//   }

//   changePage(ind: number) {
//     this.currentPage = ind;
//     this._MovieService.getTv(ind).subscribe((data) => {
//       return this.tvs = data.results;
//     })
//   }
//   prev() {
//     this.changePage(this.currentPage - 1)
//   }
//   next() {
//     this.changePage(this.currentPage +1)
//   }
// }
import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  tvs: any[] = [];
  // totalItems: number;
  currentPage = 1;
  term: string;

  constructor(public _MovieService: MovieService) {
    this.loadTvs();
  }

  loadTvs() {
    this._MovieService.getTv(this.currentPage).subscribe((data) => {
      this.tvs = data.results;
      // this.totalItems = data.total_results;  // Assuming the API returns a total count of items
    });
  }

  changePage(page: number) {
    this.currentPage = page;
    this.loadTvs();
  }
}
