import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credit } from '../model/credit.class';

const URL = 'http://localhost:8080/movies';
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
}
