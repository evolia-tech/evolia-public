import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private http = inject(HttpClient);

  /**
   * Envoie les données du devis (devis-wizard) au backend
   */
  sendQuote(data: any): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/quotes`, data);
  }

  /**
   * Envoie les données du formulaire de contact au backend
   */
  sendContact(data: any): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/contact`, data);
  }
}
