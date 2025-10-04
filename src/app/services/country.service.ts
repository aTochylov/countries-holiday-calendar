import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  countryCode: string;
  name: string;
}

export interface Holiday {
  date: string;
  localName: string;
  name: string;
  types: string[];
}

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseApiUrl = import.meta.env.NG_APP_API_BASE_URL;

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseApiUrl}/AvailableCountries`);
  }

  getNextPublicHoliday(countryCode: string): Observable<Holiday[]> {
    const url = `${this.baseApiUrl}/NextPublicHolidays/${countryCode}`;
    return this.http.get<Holiday[]>(url);
  }

  getPublicHolidays(countryCode: string, year: number): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(`${this.baseApiUrl}/PublicHolidays/${year}/${countryCode}`);
  }
}
