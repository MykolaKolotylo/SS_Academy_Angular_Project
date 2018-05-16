import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Payment } from '../utilities';

@Injectable({
  providedIn: 'root'
})
export class HistoryServiceService {
  private paymentUrl = 'api/payment';

  constructor(private http: HttpClient) { }

  getPayment(year: number, month: string): Observable<Payment[]> {
    const url = `${this.paymentUrl}/?year=${year}/?month${month}`;
    return this.http.get<Payment[]>(url);
  }

}
