import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}
  pageTitle: string;
  product: IProduct;

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProducts().subscribe({
      next: (products: IProduct[]) => {
        this.product = products.find((prod) => prod.productId === id);
        this.pageTitle = `${this.product.productName} - ${id}`;
        // this.product = singleProduct;
      },
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
