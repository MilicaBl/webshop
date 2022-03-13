import { Component, OnInit } from '@angular/core';
import { ISendData } from 'src/app/models/ISendData';
import { SendDataService } from 'src/app/services/send-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  myOrders:ISendData[]=[];
  orderMovieId:number=0
  constructor(private service:SendDataService) { }

  ngOnInit(): void {
    this.service.orderList$.subscribe((list)=>{
      this.myOrders=list
      console.log("myOrders",this.myOrders)
    })
    this.service.getOrders();
  }
  
  deleteOrder(orderId:number){
    this.service.deleteOrder(orderId);
  }
}
   