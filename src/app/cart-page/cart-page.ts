import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';          
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage {
  private cart = inject(CartService);
  readonly items$ = this.cart.items$;


  readonly placeholder = 'assets/image/IMG_1525.JPG';

 
  onImgError(ev: Event) {
    (ev.target as HTMLImageElement).src = this.placeholder;
  }

  get total(): number { return this.cart.total(); }
  remove(name: string) { this.cart.remove(name); }
  clear() { this.cart.clear(); }
}
