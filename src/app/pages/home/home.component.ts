import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { SearchFieldComponent } from "../../reusable-components/search-field/search-field.component";
import { Country, CountryService } from '../../services/country.service';
import { NavLinkComponent } from "../../reusable-components/nav-link/nav-link.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule, MatListModule, CommonModule,
    SearchFieldComponent,
    NavLinkComponent
],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  allCountries: Country[] = [];
  filteredCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe(countries => {
      this.allCountries = countries;
      this.filteredCountries = countries;
    });
  }

  onSearch(term: string) {
    this.filteredCountries = this.allCountries.filter(c =>
      c.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}