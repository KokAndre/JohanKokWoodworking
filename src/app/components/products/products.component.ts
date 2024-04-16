import { Component, OnInit } from '@angular/core';

const simulatedProductsDataFromDatabaseCall = [
  {
    "name": "Product 1",
    "imageName": "product1.jpg",
    "productId": 1
  },
  {
    "name": "Product 2",
    "imageName": "product2.jpg",
    "productId": 2
  },
  {
    "name": "Product 3",
    "imageName": "product3.jpg",
    "productId": 3
  },
  {
    "name": "Product 4",
    "imageName": "product4.jpg",
    "productId": 4
  }
]

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  public productsDataFromResponse = new Array<any>;

  constructor() { }

  ngOnInit() {
    this.productsDataFromResponse = simulatedProductsDataFromDatabaseCall;
  }

}
