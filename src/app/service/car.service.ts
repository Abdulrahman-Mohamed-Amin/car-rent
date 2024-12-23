import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url:string = 'https://myfakeapi.com/api/cars/'
  constructor(private http:HttpClient) { }

  getLimtCars():Observable<any>{
    return this.http.get(this.url)
  }
  getOneProduct(id:string):Observable<any>{
    return this.http.get(this.url + id)
  }
}
