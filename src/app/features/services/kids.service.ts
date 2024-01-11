import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/products.product';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class KidsService {
  private url: string = `${this.apiService.baseUrl}/kids`;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
  get(id:any):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  create(data:any):Observable<any>{
    return this.http.post(this.url,data);
  }
  update(id:number, data:any):Observable<any>{
    return this.http.put(`${this.url}/${id}`,data);
  }
  delete(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
  deleteAll():Observable<any>{
    return this.http.delete(this.url);
  }
  findByName(name:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url}?name=${name}`);
  }
  getImage(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}/image`);
  }
  postImage(id:number,data:any):Observable<any>{
    return this.http.post(`${this.url}/${id}/image`,data);
  }
}
