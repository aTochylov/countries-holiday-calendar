import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { switchMap, map, forkJoin } from 'rxjs';
import { Country, CountryService } from '../../../services/country.service';
import { NavLinkComponent } from "../../../reusable-components/nav-link/nav-link.component";

interface CountryHoliday {
    country: Country;
    holidayName: string;
    holidayDate: string;
}

@Component({
    selector: 'app-countries-widget',
    standalone: true,
    imports: [CommonModule, MatCardModule, HttpClientModule, NavLinkComponent],
    templateUrl: './countries-widget.component.html',
    styleUrl: './countries-widget.component.css'
})
export class CountriesWidgetComponent implements OnInit {
    randomCountries = signal<CountryHoliday[]>([]);

    constructor(private countryService: CountryService) { }

    ngOnInit() {
        this.countryService.getCountries()
            .pipe(
                switchMap(countries => {
                    const selectedCountries = this.getRandomCountries(countries, 3);

                    const holidayRequests = selectedCountries.map(country =>
                        this.countryService.getNextPublicHoliday(country.countryCode).pipe(
                            map(holidays => ({
                                country,
                                holidayName: holidays[0]?.localName || 'No upcoming holiday',
                                holidayDate: holidays[0]?.date || ''
                            }))
                        )
                    );

                    return forkJoin(holidayRequests);
                })
            )
            .subscribe((results: CountryHoliday[]) => this.randomCountries.set(results));
    }

    private getRandomCountries(countries: Country[], count: number): Country[] {
        const shuffled = [...countries].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
}
