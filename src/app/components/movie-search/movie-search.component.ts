import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { MoviesToCartService } from 'src/app/services/movies-to-cart.service';
import { IMovie } from '../../models/IMovie';
import { GetMoviesService } from '../../services/get-movies.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  searchedMovie=new Subject<string>();
  movies:Observable<IMovie[]>=new Observable();
  cart:boolean=true
  constructor(private service: GetMoviesService, private idService:MoviesToCartService) { }

  ngOnInit(): void {
    this.movies=this.searchedMovie.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((textFromUser)=> 
        this.service.search(textFromUser))
    )
   
  }
  cartToTrue(){
    this.cart=true
  }
  search(userInput:string){
    this.searchedMovie.next(userInput)
  }
  saveToCart(movie:IMovie){
    this.idService.addToCart(movie);
    this.cart=false
  }
}
