import { Component, OnInit } from "@angular/core";
import { Product } from "../products";
import { FormBuilder } from "@angular/forms";
import { CartService } from "../cart.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: "",
    phone: ""
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}
  remove(product: Product) {
    this.items = this.cartService.remove(product);
  }
  onSubmit() {
    this.items = this.cartService.clearCart();
    console.warn("Order submitted", this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
