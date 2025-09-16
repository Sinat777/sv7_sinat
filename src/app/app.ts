// src/app/app.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // Keep only what is used in the template
    Navbar,
    Footer
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
