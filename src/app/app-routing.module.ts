import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'' , redirectTo:'home' , pathMatch:"full"},
  {path:'home',component:HomeComponent,title:'All-Product'},
  {path:'allproducts',component:AllProductsComponent,title:'All-Product'},
  {path:'product_details/:id',component:ProductDetailsComponent,title:'product-details'},
  {path:"sign_up" , component:SignUpComponent , title:"Sign up"},
  {path:"sign_in" , component:SignInComponent , title:"Sign in"},
  {path:"notfound" , component:NotfoundComponent , title:"Not found"},
  {path:"**",redirectTo:"notfound",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
