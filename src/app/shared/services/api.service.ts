import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/features/models/products.product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:4567';
  

  constructor(private http: HttpClient) { }
  
  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }
  
  get(id:any):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data:any):Observable<any>{
    return this.http.post(this.baseUrl,data);
  }

  update(id:number, data:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,data);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll():Observable<any>{
    return this.http.delete(this.baseUrl);
  }

  findByName(product_name:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.baseUrl}?name=${product_name}`);
  }

  getImage(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}/image`);
  }

  postImage(id:number,data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/${id}/image`,data);
  }
  
}
