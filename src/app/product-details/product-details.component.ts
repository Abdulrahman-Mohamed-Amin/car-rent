import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';
import { ActivatedRoute } from '@angular/router';
import { car } from '../interface/cars';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  car:any;
  constructor(private service:CarService , private route:ActivatedRoute){}
  ngOnInit(): void {
    this.getProduct(this.route.snapshot.params['id'])
  }

  getProduct(id:string){
    this.service.getOneProduct(id).subscribe((res) =>{
      this.car = res.Car
      
      
    } )
  }


}
