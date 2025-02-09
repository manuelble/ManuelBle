import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private http: HttpClient) { }

    getJsonAPI(): Observable<any>{
      return this.http.get("https://rickandmortyapi.com/api/character/")
    }

  }