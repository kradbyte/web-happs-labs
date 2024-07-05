import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hidden-button',
  standalone: true,
  imports: [],
  templateUrl: './hidden-button.component.html',
  styleUrl: './hidden-button.component.css'
})
export class HiddenButtonComponent {
  constructor(private router: Router) {}

  redirectToPipe() {
    this.router.navigate(['/pipeline'], { queryParams: { flag110: 'key_pato' } });
  }
}
