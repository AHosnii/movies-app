import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesdetailsService } from '../moviesdetails.service';
@Component({
  selector: 'app-peopledetails',
  templateUrl: './peopledetails.component.html',
  styleUrls: ['./peopledetails.component.scss']
})
export class PeopledetailsComponent {
  ids: any;
  peopleDetails: any;
  constructor(_ActivatedRoute:ActivatedRoute,public _MoviesdetailsService:MoviesdetailsService) {
    this.ids = _ActivatedRoute.snapshot.paramMap.get("id");
    _MoviesdetailsService.getpeopleId(this.ids).subscribe((data) => {
      this.peopleDetails = data;
    })

  }
}
