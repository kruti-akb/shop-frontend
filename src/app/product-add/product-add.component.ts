import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm:FormGroup;

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private ps:ProductService,
    private fb:FormBuilder
  ) { 
    this.angForm=this.fb.group({
      name:['',Validators.required],
      price:['',Validators.required],
      returnable:['',Validators.required],
    });
  }

  ngOnInit(): void {
  }

  addProduct(name:string,price:number,returnable:boolean){

    this.ps.addProduct(name,price,returnable);

    this.router.navigate(['product']);

  }

}
