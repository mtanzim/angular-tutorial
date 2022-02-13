import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const productId = Number(params.get("productId"));
    this.product = products.find((p) => p.id === productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert("Product added");
  }
}
