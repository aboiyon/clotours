// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, catchError } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Address } from '../models/address';

// @Injectable({
//   providedIn: 'root'
// })
// export class AddressService {

//   private url: string = `${environment.apiUrl}/api/addresses`;

//   constructor(private http: HttpClient, private eh: HttpErrorHandler) { }

//   createAddress(address: Address): Observable<Address> {
//     return this.http.post<Address>(this.url, address)
//       .pipe(catchError(this.eh.handleError));
//   }

//   getAddress(id: string): Observable<Address> {
//     return this.http.get<Address>(`${this.url}/${id}`)
//       .pipe(catchError(this.eh.handleError));
//   }
  
// }
