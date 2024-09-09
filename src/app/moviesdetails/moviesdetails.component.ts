import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MoviesdetailsService } from '../moviesdetails.service';

@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.scss'],
})
export class MoviesdetailsComponent implements OnInit{
  movieDetails: any;
  ind: any;
  constructor(_ActivatedRoute: ActivatedRoute, _MoviesdetailsService:MoviesdetailsService) {
    this.ind = _ActivatedRoute.snapshot.paramMap.get("id");
    _MoviesdetailsService.getMoviesId(this.ind).subscribe((data) => {
      this.movieDetails = data;
    })
  }
  ngOnInit() {

  }
}
