import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

type Product = { name: string; price: number; qty: number; imageUrl: string };

const IMG = 'assets/image/'; 

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css'
})
export class ProductsPage {
  private cart = inject(CartService);


  readonly placeholder = `${IMG}IMG_1525.JPG`;


  products: Product[] = [
    { name: 'iPhone 15',          price:  799, qty: 1, imageUrl: `${IMG}IMG_1524.JPG` },
    { name: 'iPhone 16',          price:  899, qty: 1, imageUrl: `${IMG}IMG_1525.JPG` },
    { name: 'iPhone 16 Pro Max',  price: 1199, qty: 1, imageUrl: `${IMG}IMG_1526.JPG` },
    { name: 'iPhone 16e',         price:  699, qty: 1, imageUrl: `${IMG}IMG_1527.JPG` },
    { name: 'MacBook',            price: 1299, qty: 1, imageUrl: `${IMG}IMG_1533.JPG` },
    { name: 'AirPods',            price:  199, qty: 1, imageUrl: `${IMG}IMG_1537.JPG` },
    { name: 'Airpods pro 2',          price:  499, qty: 1, imageUrl: `${IMG}IMG_1537.JPG` },
    { name: 'Airpods 4',          price:  499, qty: 1, imageUrl: `${IMG}IMG_1537.JPG` },
  ];

  addToCart(p: Product) {
    this.cart.add({ name: p.name, price: p.price, qty: p.qty, imageUrl: p.imageUrl });
  }

  inc(p: Product) { p.qty++; }
  dec(p: Product) { if (p.qty > 1) p.qty--; }

  trackByName = (_: number, item: Product) => item.name;

  onImgError(ev: Event) {
    (ev.target as HTMLImageElement).src = this.placeholder;
  }
}
