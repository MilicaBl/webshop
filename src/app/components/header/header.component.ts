import { Component, OnInit } from '@angular/core';
import { MoviesToCartService } from 'src/app/services/movies-to-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  quantity:number=0
  constructor(private service:MoviesToCartService) { }

  ngOnInit(): void {
    //För att få rätt antal produkter i varukorgen
   this.service.cartMoviesList
   .subscribe(res=>{
     this.quantity=res.length
   })
   console.log(this.quantity)
  
  }

}
