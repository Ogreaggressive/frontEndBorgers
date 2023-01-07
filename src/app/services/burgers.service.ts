import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Observable} from 'rxjs'

import {Burger} from '../interfaces/Burger'

@Injectable({
 providedIn: 'root'
})
export class BurgersService {

  BACKEND_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBurgers(): Observable<Burger[]>{

    return this.http.get<Burger[]>(`${this.BACKEND_URL}/burgers`);
  }

  getBurger(id: number): Observable<Burger>{

    return this.http.get<Burger>(`${this.BACKEND_URL}/burgers/${id}`);
  }

  createBurger(burger: Burger): Observable<Burger>{

    return this.http.post<Burger>(`${this.BACKEND_URL}/burgers`, burger);
  }

  deleteBurger(id: number): Observable<Burger>{

    return this.http.delete<Burger>(`${this.BACKEND_URL}/burgers/${id}`);
  }

  updateBurger(id: number, burger: Burger): Observable<Burger>{

    return this.http.put<Burger>(`${this.BACKEND_URL}/burgers/${id}`, burger);
  }


}
