// import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TvComponent } from './tv/tv.component';
import { MoviesComponent } from './movies/movies.component';
import { PeopleComponent } from './people/people.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchTitlePipe } from './search-title.pipe';
import { SearchNamePipe } from './search-name.pipe';
import { SeemorePipe } from './seemore.pipe';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    TvComponent,
    MoviesComponent,
    PeopleComponent,
    ContactsComponent,
    SearchTitlePipe,
    SearchNamePipe,
    SeemorePipe,
    MoviesdetailsComponent,
    TvdetailsComponent,
    PeopledetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
  ],
  // schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
