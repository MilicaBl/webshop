import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieSearchComponent } from './components/movie-search/movie-search.component'
import { ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminComponent } from './components/admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CartComponent,
    HeaderComponent,
    CategoriesComponent,
    MovieSearchComponent,
    NotfoundComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
