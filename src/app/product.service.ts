import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Product from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  uri="http://localhost:3005/products";
  
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.uri);
  }

  addProduct(name:string,price:number,returnable:boolean){

    const obj={
      name:name,
      price:price,
      returnable:returnable
    };

    this.http.post(this.uri,obj).subscribe((res)=>console.log("Inserted"));
  }


  findProduct(id:any){
    
    return this.http.get(`${this.uri}/${id}`);

  }

  updateProduct(id:any,name:string,price:number,returnable:boolean){

    const obj={
      name:name,
      price:price,
      returnable:returnable
    };

    this.http.put(`${this.uri}/${id}`,obj).subscribe((res)=>console.log("Updated"));

  }

  deleteProduct(id:any){

    return this.http.delete(`${this.uri}/${id}`);

  }

  

}
