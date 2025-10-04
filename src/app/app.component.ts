import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatToolbar, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  homeRoute = appRoutes.home;
}
