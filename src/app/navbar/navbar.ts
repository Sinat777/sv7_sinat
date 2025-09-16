// src/app/navbar/navbar.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    // Remove RouterLink and RouterLinkActive if not used in template
  ],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {}
