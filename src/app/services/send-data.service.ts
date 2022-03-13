import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISendData } from '../models/ISendData';
import { MoviesToCartService } from './movies-to-cart.service';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private orderList= new Subject<ISendData[]>();
  orderList$=this.orderList.asObservable();
  constructor(private http: HttpClient, private service:MoviesToCartService) { }

  getOrders(){
    this.http.get<ISendData[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders'+'?companyId=5')//environment.orderUrl)
    .subscribe((data)=>{
    this.orderList.next(data)
  })
  }
  placeOrder(order:ISendData){
    const httpHeaders=new HttpHeaders({
      'content-type':'application/json',
    });
    console.log("testar data",order)
     return this.http.post<ISendData>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders',//environment.orderUrl,
      JSON.stringify(order),
      {headers:httpHeaders}).subscribe((res)=>{
        console.log(res)
      })
  }
  deleteOrder(orderId:number){
    this.http.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/'+orderId+'?companyId=5')//environment.orderUrl,
    .subscribe(() => this.getOrders());
  }
}
