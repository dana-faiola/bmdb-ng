import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credit } from '../model/credit.class';

const URL = 'http://localhost:8080/credits';
@Injectable({
  providedIn: 'root',
})
export class CreditService {
  constructor(private http: HttpClient) {}

  //service functions
  // getAll credits
  getAll(): Observable<Credit[]> {
    return this.http.get(URL + '/') as Observable<Credit[]>;
  }

  create(credit: Credit): Observable<Credit> {
    return this.http.post(URL + '/', credit) as Observable<Credit>;
  }
  getById(id: number): Observable<Credit> {
    return this.http.get(URL + '/' + id) as Observable<Credit>;
  }
  update(credit: Credit): Observable<Credit> {
    return this.http.put(URL + '/', credit) as Observable<Credit>;
  }
  delete(id: number): Observable<Credit> {
    return this.http.delete(URL + '/' + id) as Observable<Credit>;
  }
}
