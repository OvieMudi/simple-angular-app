import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  pageTitle: string;
  product: IProduct = {
    productId: 5,
    productName: 'Hammer',
    productCode: 'TBX-0048',
    releaseDate: 'May 21, 2019',
    description: 'Curved claw steel hammer',
    price: 8.9,
    starRating: 4.8,
    imageUrl: 'assets/images/hammer.png',
  };

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle = `${this.product.productName} - ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
