// import { Component } from '@angular/core';
// import { MovieService } from '../movie.service';
// @Component({
//   selector: 'app-people',
//   templateUrl: './people.component.html',
//   styleUrls: ['./people.component.scss']
// })
// export class PeopleComponent {

//   peoples: any = [];
//   pageNumbers: number[] = [];
//   currentPage = 2;
//   term: string;
//   constructor(public _MovieService: MovieService) {
//     for (let i = 1; i < 11; i++) {
//       this.pageNumbers.push(i)
//     }
//     _MovieService.getPeople(this.currentPage).subscribe((data) => {
//       return this.peoples = data.results;
//     })
//   }
//   changPage(ind: number) {
//     this.currentPage = ind
//     this._MovieService.getPeople(this.currentPage).subscribe((data) => {
//       return this.peoples = data.results;
//     })
//   }
//   prev() {
//     this.changPage(this.currentPage - 1)
//   }
//   next() {
//     this.changPage(this.currentPage + 1)
//   }
// }

import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  peoples: any = [];
  pageNumbers: number[] = [];
  currentPage = 1;
  term: string;
  constructor(public _MovieService: MovieService) {
    this.loadPeoples();
  }
  loadPeoples() {
    this._MovieService.getPeople(this.currentPage).subscribe((data) => {
      this.peoples = data.results;
      // this.totalItems = data.total_results;  // Assuming the API returns a total count of items
    });
  }
  // changPage(ind: number) {
  //   this.currentPage = ind
  //   this._MovieService.getPeople(this.currentPage).subscribe((data) => {
  //     return this.peoples = data.results;
  //   })

  changePage(page: number) {
    this.currentPage = page;
    this.loadPeoples();
  }
  }


