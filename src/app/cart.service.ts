import { Injectable } from "@angular/core";

import { Product } from "./products";

@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }
  getItems() {
    return this.items;
  }
  remove(product: Product) {
    const idx = this.items.findIndex((p) => p.id === product.id);
    console.log(idx);
    this.items = this.items.slice(0, idx).concat(this.items.slice(idx + 1));
    return this.getItems();
  }
  clearCart() {
    this.items = [];
    return this.getItems();
  }
}
