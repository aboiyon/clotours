import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products.product';

@Injectable({
  providedIn: 'root'
})
export class ToursService {

  toursUrl = 'http://localhost:4567/tours'

  constructor( private http: HttpClient) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.toursUrl);
  }
  get(id: any):Observable<any>{
    return this.http.get(`${this.toursUrl}/${id}`);
  }

  create(data:any):Observable<any>{
    return this.http.post(this.toursUrl,data);
  }

  update(id:number, data:any):Observable<any>{
    return this.http.put(`${this.toursUrl}/${id}`,data);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(`${this.toursUrl}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(this.toursUrl);
  }

  findByName(name:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.toursUrl}?name=${name}`);
  }

  getImage(id:number):Observable<any>{
    return this.http.get(`${this.toursUrl}/${id}/image`);
  }

  postImage(id:number,data:any):Observable<any>{
    return this.http.post(`${this.toursUrl}/${id}/image`,data);
  }
}
