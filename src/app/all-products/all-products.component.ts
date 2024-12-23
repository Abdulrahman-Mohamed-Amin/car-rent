import { car } from './../interface/cars';
import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  cars:car[] = []
  cars2:car[] = []
  searchTerm:string=''
  show:boolean = true
  page:number = 1
  constructor(private service:CarService){}
  ngOnInit(): void {
    this.getAllCars()
  }
  getAllCars(){
    this.service.getLimtCars().subscribe((res)=>{
      this.cars = res.cars
    })
  }
  search(){
    this.cars2 = this.cars.filter(car => car.car.toLowerCase().includes(this.searchTerm.toLowerCase()) || car.car_model.toLowerCase().includes(this.searchTerm.toLowerCase()))
    this.show = false
    console.log(this.cars2)
  }

}
