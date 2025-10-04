import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CountryComponent } from './pages/country/country.component';
import { appRoutes } from './routes';

export const routes: Routes = [
    { path: appRoutes.home, component: HomeComponent },
    { path: appRoutes.country.path, component: CountryComponent}
];
