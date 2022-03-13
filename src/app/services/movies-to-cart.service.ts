import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../models/IMovie';


@Injectable({
  providedIn: 'root'
})

export class MoviesToCartService {
  
  cartMoviesList=new Subject<IMovie[]>();
  cartMoviesList$=this.cartMoviesList.asObservable();
  cartMovies:IMovie[]=[]
  

  constructor() { }

  getMovies(){
    this.cartMoviesList.next(this.cartMovies);
  }
  //Få IMovie objektet på "lägg i varukorgen" klick
  getCartMovies(movie:IMovie){
    this.cartMovies.push(movie);
    this.cartMoviesList.next(this.cartMovies);
  }
  addToCart(movie:IMovie){
    this.cartMovies.push(movie);
    this.cartMoviesList.next(this.cartMovies);
    this.getTotalValue();
    console.log(this.cartMovies)
  }
  //Få det totala värdet i kr
  getTotalValue():number{
    let total:number=0;

    this.cartMovies.map((movie)=> 
    {total+= movie.price
    })
    return total
  }
  //Funktion som tar bort filmen från varukorgen och uppdatetat listan
  removeFromTheCart(movie:IMovie){
    this.cartMovies.map((m:IMovie,index:number)=>{
      if(movie.id==m.id){
        this.cartMovies.splice(index,1)
      }
      this.cartMoviesList.next(this.cartMovies)
    })

  }
  
}
