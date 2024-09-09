import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { PeopleComponent } from './people/people.component';
import { PeopledetailsComponent } from './peopledetails/peopledetails.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  {path:'', redirectTo:'movies' ,pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'tv' , component:TvComponent},
  {path:'people' , component:PeopleComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactsComponent},
  {path:'moviesdetails/:id' , component:MoviesdetailsComponent},
  {path:'tvdetails/:id' , component:TvdetailsComponent},
  {path:'peopledetails/:id' , component:PeopledetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
