// session.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private baseUrl = 'http://localhost:8089/meditivo/session';

  constructor(private http: HttpClient) {}

  getSessionsByUser(): Observable<any> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.baseUrl}/fetchsessions`, { headers });
  }

  saveSession(duration: number, sound: string | null): Observable<any> {
  const token = localStorage.getItem('token') || '';
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  const body = {
    duration: duration,
    sound: sound || ''  // send empty string if no sound selected
  };

  return this.http.post(`${this.baseUrl}/savesession`, body, { headers });
}
}
