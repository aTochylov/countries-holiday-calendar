import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  countryCode: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private apiUrl = 'https://date.nager.at/api/v3/AvailableCountries';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
