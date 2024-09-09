import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent {
  pageNumbers: number[] = [];
  trendingAll = [];
  currentPage = 1;
  term: string;

  constructor(public _MovieService: MovieService) {
    for (let i = 1 ; i < 5 ; i++)
    {
      this.pageNumbers.push(i);
    }
    _MovieService.getTrendingAll(this.currentPage).subscribe((data) => {
      this.trendingAll = data.results;
    })
  }
  changePage(ind:number)
  {
    this.currentPage = ind;
    this._MovieService.getTrendingAll(this.currentPage).subscribe((data:any) => {
      this.trendingAll = data.results;
    })
  }
  prev() {
    this.changePage(this.currentPage -1)
  }
  next() {
    this.changePage(this.currentPage +1)
  }

}

// code with pagination-controls

// import { Component } from '@angular/core';
// import { MovieService } from '../movie.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
// })
// export class HomeComponent {
//   // pageNumbers: number[] = [];
//   trendingAll: any[] = [];
//   currentPage: number = 1;
//   term: string;

//   constructor(public _MovieService: MovieService) {
//     this.loadTrendingAll();
//   }

//   loadTrendingAll() {
//     this._MovieService.getTrendingAll(this.currentPage).subscribe((data: any) => {
//       this.trendingAll = data.results;
//     });
//   }

//   changePage(page: number) {
//     this.currentPage = page;
//     this.loadTrendingAll();
//   }


// }


