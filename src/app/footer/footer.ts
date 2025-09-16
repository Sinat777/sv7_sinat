import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  readonly year = new Date().getFullYear();
  // You can set these to your real contact links later
  readonly phone = '012 345 678';
  readonly email = 'support@example.com';
  readonly address = 'Phnom Penh, Cambodia';
}
