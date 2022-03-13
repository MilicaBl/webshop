import { Observable } from "rxjs";
import { ICategories } from "../models/ICategories";
import { IMovie } from "../models/IMovie";

export interface IGetMoviesService{
    movies$:Observable<IMovie[]>;

    getMovies():void
   
}