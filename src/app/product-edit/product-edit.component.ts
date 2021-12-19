import { Component, OnInit } from '@angular/core';


import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product:any={};

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

    this.route.params.subscribe((param)=>{
      
      this.ps.findProduct(param['id']).subscribe(res=>{
        this.product=res;
      });

    });

  }


  updateProduct(id:any,name:string,price:number,returnable:boolean){
    this.ps.updateProduct(id,name,price,returnable);
    
    this.router.navigate(['/product']);
  }

}
