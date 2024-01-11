import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  // getItem(key: string): string | null {
  //   const url = `/api/v1/items/${key}`;
  //   const response = this.http.get(url);

  //   if (response.status === 200) {
  //     return response.json();
  //   } else {
  //     return null;
  //   }
  // }
  
}
