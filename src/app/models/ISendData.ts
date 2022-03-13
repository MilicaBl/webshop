import { IMovie } from "./IMovie";

export interface ISendData{
    id:number;
    companyId:number;
    created:Date;
    createdBy:any;
    paymentMethod:string;
    totalPrice:number;
    status:number;
    orderRows:any[];
}
