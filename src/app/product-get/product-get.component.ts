import { Component, OnInit } from '@angular/core';
import Product from '../product';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products:Product[]=[];

  constructor(private ps:ProductService) { }

  ngOnInit(): void {

    this.ps.getProducts().subscribe((data:Product[])=>{
      this.products=data;
      
    });

  }


  deleteProduct(id:any){
    this.ps.deleteProduct(id).subscribe(res=>{
      console.log("deleted");

      this.ngOnInit();
    });
  }

}
