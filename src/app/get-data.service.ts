import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }
  getProducts()
 {
   let url="assets/productBrands.json";           //assig the path of json file to url 
   return this.http.get(url);                    //here json url will be return to the 
 }
}
 