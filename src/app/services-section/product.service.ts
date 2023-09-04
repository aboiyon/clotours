// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Product } from '../interfaces/product.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   productUrl = 'https://api.itbook.store/1.0/';

//   constructor(private http:HttpClient) { }

//   getAll():Observable<Product[]>{
//     return this.http.get<Product[]>(this.productUrl);
//   }
//   get(id:any):Observable<any>{
//     return this.http.get(`${this.productUrl}/${id}`);
//   }
//   create(data:any):Observable<any>{
//     return this.http.post(this.productUrl,data);
//   }
//   update(id:number, data:any):Observable<any>{
//     return this.http.put(`${this.productUrl}/${id}`,data);
//   }
//   delete(id:number):Observable<any>{
//     return this.http.delete(`${this.productUrl}/${id}`);
//   }
//   deleteAll():Observable<any>{
//     return this.http.delete(this.productUrl);
//   }
//   findByName(product_name:string):Observable<Product[]>{
//     return this.http.get<Product[]>(`${this.productUrl}?name=${product_name}`);
//   }
//   getImage(id:number):Observable<any>{
//     return this.http.get(`${this.productUrl}/${id}/image`);
//   }
//   postImage(id:number,data:any):Observable<any>{
//     return this.http.post(`${this.productUrl}/${id}/image`,data);
//   }
// }
