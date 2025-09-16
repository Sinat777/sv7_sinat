import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './cart-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items$ = new BehaviorSubject<CartItem[]>([]);
  readonly items$ = this._items$.asObservable();

  get items(): CartItem[] {
    return this._items$.value;
  }

  add(item: CartItem) {
    const items = [...this.items];
    const idx = items.findIndex(it => it.name === item.name);
    if (idx > -1) {
      const existing = items[idx];
      items[idx] = {
        ...existing,
        qty: (existing.qty ?? 0) + (item.qty ?? 1),
        // keep existing image, but fill it if missing
        imageUrl: existing.imageUrl || item.imageUrl
      };
    } else {
      items.push({ ...item, qty: item.qty ?? 1 });
    }
    this._items$.next(items);
  }

  remove(name: string) {
    this._items$.next(this.items.filter(i => i.name !== name));
  }

  clear() {
    this._items$.next([]);
  }

  total(): number {
    return this.items.reduce((s, i) => s + i.price * i.qty, 0);
  }
}
