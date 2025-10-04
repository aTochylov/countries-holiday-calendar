import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CountryService, Holiday } from '../../services/country.service';
import { appRoutes } from '../../routes';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatListModule, MatButtonModule, MatIcon, RouterLink],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css',
})
export class CountryComponent implements OnInit {
  homeRoute = appRoutes.home;
  countryCode!: string;
  currentYear = new Date().getFullYear();
  years = Array.from({ length: 11 }, (_, i) => 2020 + i);
  holidays: Holiday[] = [];

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit() {
    this.countryCode = this.route.snapshot.paramMap.get('code')!;
    this.loadHolidays(this.currentYear);
  }

  selectYear(year: number) {
    this.currentYear = year;
    this.loadHolidays(year);
  }

  loadHolidays(year: number) {
    this.countryService
      .getPublicHolidays(this.countryCode, year)
      .subscribe(holidays => (this.holidays = holidays));
  }
}
