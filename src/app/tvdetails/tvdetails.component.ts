import { Component } from '@angular/core';
import { MoviesdetailsService } from '../moviesdetails.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
  ids: any;
  tvsDetails: any;
  constructor(_ActivatedRoute:ActivatedRoute, _MoviesdetailsService:MoviesdetailsService) {
    this.ids = _ActivatedRoute.snapshot.paramMap.get("id");
     _MoviesdetailsService.getTvId(this.ids).subscribe((data) => {
       this.tvsDetails = data;
    })
  }
}
