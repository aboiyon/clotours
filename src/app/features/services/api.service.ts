import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public baseUrl: string = 'http://localhost.4200';
  
  constructor() { }
}
