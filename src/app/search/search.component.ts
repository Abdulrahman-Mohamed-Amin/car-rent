import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';
import { car } from '../interface/cars';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  limtCars:car[] = []
  limtCar:car[] = []
  carFound:car[] =[]
  searchTerm:string =''
  show:boolean = true
  constructor(private service:CarService){}
ngOnInit(): void {
  this.getfourCars()
}
  getfourCars(){
    this.service.getLimtCars().subscribe((res)=>{
      this.limtCars = res.cars.splice(0,4)
      this.limtCar = res.cars
    })
  }

  search(){
     this.carFound = this.limtCar.filter(car => car.car.toLowerCase().includes(this.searchTerm.toLowerCase()) || car.car_model.toLowerCase().includes(this.searchTerm.toLowerCase())).splice(0,1)
    this.show = false
    if(this.searchTerm == ""){
      this.show = true
    }
  }

}
