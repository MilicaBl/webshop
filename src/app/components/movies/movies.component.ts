import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { CategoriesService } from 'src/app/services/categories.service';
import { GetMoviesService } from 'src/app/services/get-movies.service';
import { MoviesToCartService } from 'src/app/services/movies-to-cart.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies:IMovie[]=[];
  filteredMovies:IMovie[]=[]
  idCategory:number=0
  movieCategory:number=0
  filter:boolean=false
  constructor(private service:GetMoviesService, private idService:MoviesToCartService, private categoryService:CategoriesService) { }

  ngOnInit(): void {
    //Får listan med filmer fån api
    this.service.movies$.subscribe((apiMovies)=>{
      this.movies=apiMovies;
    })
    
    this.service.getMovies();
    //Får Kateggoris id nummer
    this.categoryService.categoryId$.subscribe((id)=>{
      this.idCategory=id;
      console.log("kategori",this.idCategory)
      this.filterMovies();
    })
  }
  //Sparar till varukorgen
  saveToCart(movie:IMovie){
    this.idService.addToCart(movie);
  }
  //Skapar en lista med kategorier
  filterMovies(){
  this.filter=true
  this.filteredMovies=[]
    for(let m of this.movies){
      for( let category of m.productCategory){
        for(let cId of [category.categoryId]){
          console.log(cId)
          if (cId==this.idCategory){
            this.filteredMovies.push(m);
            console.log("samma", this.filteredMovies)
          }
        }
      }
    }
  }   
}
