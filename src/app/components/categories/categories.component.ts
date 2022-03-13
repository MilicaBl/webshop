import { Component, OnInit } from '@angular/core';
import { ICategories } from 'src/app/models/ICategories';
import { CategoriesService } from 'src/app/services/categories.service';
import { GetMoviesService } from 'src/app/services/get-movies.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories:ICategories[]=[];

  constructor(private service:GetMoviesService, private categoryService:CategoriesService) { }

  ngOnInit(): void {
    //Hämtar listan med kategorier
    this.service.categories$.subscribe((apiCategories)=>{
      this.categories=apiCategories;
    })
    this.service.getCategories();
  }
  //Skickar kategori id
  categoryId(categoryId:number){
    this.categoryService.sendCategoryId(categoryId);
  }
}
