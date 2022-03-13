import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie } from 'src/app/models/IMovie';
import { ICategories } from '../models/ICategories';
import { IGetMoviesService } from './IGetMoviesService';



@Injectable({
  providedIn: 'root'
})
export class GetMoviesService implements IGetMoviesService{
  // Lista med filmer
  private movies= new Subject <IMovie[]>();
  movies$=this.movies.asObservable();
  // Lista med kategorier
  private categories= new Subject<ICategories[]>();
  categories$=this.categories.asObservable();


  constructor(private http: HttpClient) { }

  //Hela listan med filmer från Api
  getMovies(){
     this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')//environment.moviesUrl
      .subscribe((moviesFromApi)=>{
        this.movies.next(moviesFromApi);
    })  
  }
  // Hämta kategorier
  getCategories(){
    this.http.get<ICategories[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories')//environment.categoriesUrl)
      .subscribe((apiCategories)=>{
        this.categories.next(apiCategories);
      })
  }
  
  search(searchedMovie:string):Observable<IMovie[]>{
    return this.http
      .get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText='+searchedMovie);
  }
}
