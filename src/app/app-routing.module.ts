import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path:"product",
    component:ProductGetComponent
    //if you write "/product" instead "product" it won't work
  },
  {
    path:"product/add",
    component:ProductAddComponent
  },
  {
    path:"product/edit/:id",
    component:ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
