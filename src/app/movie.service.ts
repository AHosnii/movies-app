import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _HttpClient: HttpClient) {
  }
  getTrendingAll(pageNumber: any): Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumber);
  }
  getMovies(pageNumber: number):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumber);
  }
  getTv(pageNumber: number): Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumber);
  }
  getPeople(pageNumber: number): Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumber);
  }
}
