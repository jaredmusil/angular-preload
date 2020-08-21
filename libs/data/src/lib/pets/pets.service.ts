import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private readonly http: HttpClient) { }

  getDog(id: string): Observable<any> {
    return this.http.get<any[]>(`/api/dogs/${id}`)
  }

  getDogs(): Observable<any> {
    return this.http.get<any[]>('/api/dogs')
  }

  getTurtle(id: string): Observable<any> {
    return this.http.get<any[]>(`/api/turtle/${id}`)
  }
  
  getTurtles(): Observable<any> {
    return this.http.get<any[]>('/api/turtles')
  }

  getCat(id: string): Observable<any> {
    return this.http.get<any[]>(`/api/cat/${id}`)
  }

  getCats(): Observable<any> {
    return this.http.get<any[]>('/api/cats')
  }
}
