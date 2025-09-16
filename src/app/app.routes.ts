import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { AboutPage } from './about-page/about-page';
import { ContactPage } from './contact-page/contact-page';
import { ProductsPage } from './products-page/products-page';
import { CartPage } from './cart-page/cart-page';


export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: AboutPage },
  { path: 'contact', component: ContactPage },
  { path: 'products', component: ProductsPage },
  { path: 'cart', component: CartPage },
  { path: 'products', component: ProductsPage },


];

