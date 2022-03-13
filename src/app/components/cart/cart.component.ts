import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMovie } from 'src/app/models/IMovie';
import { ISendData} from 'src/app/models/ISendData';
import { MoviesToCartService } from 'src/app/services/movies-to-cart.service';
import { SendDataService } from 'src/app/services/send-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  movies:IMovie[]=[];
  totalAmount!:number;
  
  // Formulär
  userForm=new FormGroup({
    firstName:new FormControl('',Validators.required),
    companyId:new FormControl('',Validators.required),
    paymentMethod:new FormControl('',Validators.required)
  })

  constructor(private service:MoviesToCartService, private sendDataService:SendDataService) { }

  ngOnInit(): void { 
    //Hämta filmer som ska vara i varukorgen
    this.service.cartMoviesList$.subscribe(cartMovies=>{
      this.movies=cartMovies;
      console.log(this.movies)
    //Hämta det totala värdet
      this.totalAmount=this.service.getTotalValue();
      console.log(this.totalAmount)
    })
    this.service.getMovies();
  }
  //Ta bort från varukorgen
  removeFromTheCart(item:IMovie){
    this.service.removeFromTheCart(item)
  }
  //Lägg order
  orderNow(){
    var moviesToOrder = this.movies.map((movie) => {
      return { productId: movie.id, amount: movie.price}
    });
    //Skapa en SendData order
    const order:ISendData={
      id:0,
      companyId:5,
      created: new Date,
      createdBy:this.userForm.get('firstName')?.value,
      paymentMethod:this.userForm.get('paymentMethod')?.value,
      totalPrice:this.totalAmount,
      status:0,
      orderRows:moviesToOrder
    }
      console.log(order);
    //Skicka data till service
      this.sendDataService.placeOrder(order)
  }
}
