import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IMovie } from '../models/IMovie';
import { GetMoviesService } from './get-movies.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoryId= new Subject<number>();
  categoryId$= this.categoryId.asObservable();
  cId:number=0
  
  constructor(private service: GetMoviesService) { }

  sendCategoryId(id:number){
    this.cId=id
    this.categoryId.next(this.cId);
  }
}
