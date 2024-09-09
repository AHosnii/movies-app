import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesdetailsService {

  constructor(public _HttpClient: HttpClient) {

  }
  getMoviesId(id:number):Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=8c4a17696dab522853861e576ee44805&language=en-US");
  }
  getTvId(id:number):Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=8c4a17696dab522853861e576ee44805&language=en-US");
  }
  getpeopleId(id:number):Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/person/" + id + "?api_key=8c4a17696dab522853861e576ee44805&language=en-US");
  }
}
