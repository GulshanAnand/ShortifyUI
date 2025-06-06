import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { UrlData } from '../interfaces/urlData.interface';
import { AuthService } from './auth.service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlshortenerService {

  private apiBaseUrl = environment.baseUrl + environment.apiPath;

  constructor(private http: HttpClient, private authService: AuthService) { }

  shorten(urlData: UrlData): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(`${this.apiBaseUrl}/shorten`, urlData, { headers });
  }

}
