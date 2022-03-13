import { Observable, Subject } from "rxjs";
import { ICategories } from "../models/ICategories";
import { IMovie } from "../models/IMovie";
import { IGetMoviesService } from "./IGetMoviesService";

export class MockGetMoviesService implements IGetMoviesService{
    private movies= new Subject <IMovie[]>();
    movies$=this.movies.asObservable();

    testData:IMovie[]=[
        {id:0,
        name:"Test",
        description:"",
        price:100,
        imageUrl:"",
        year:1994,
        added:new Date(),
        productCategory:[{
            categoryId:9,
            category:null
        }]},
        {id:0,
            name:"Test2",
            description:"",
            price:109,
            imageUrl:"",
            year:1998,
            added:new Date(),
            productCategory:[{
                categoryId:1,
                category:null
            }]}
    ]
    
    getMovies(): void {
        this.movies.next(this.testData)
    }
    
}