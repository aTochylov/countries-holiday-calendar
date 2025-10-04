import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-link.component.html',
})
export class NavLinkComponent {
  @Input() displayText = "";
  @Input() path: string = "";
}
