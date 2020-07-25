import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {
    // ⬆️⬆️shorthand for setting productService variable
  }

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: any;
  products: IProduct[];

  filteredProducts: IProduct[];

  _filterTerm: string;
  get filterTerm(): string {
    return this._filterTerm;
  }
  set filterTerm(value: string) {
    this._filterTerm = value;
    this.filteredProducts = this.filterTerm
      ? this.filterProducts(this.filterTerm)
      : this.products;
  }

  filterProducts(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleShowImage(): void {
    this.showImage = !this.showImage;
  }

  onUpdatedRating(event: string): void {
    console.log(event);
    this.pageTitle = `star rating: ${event}`;
  }

  ngOnInit(): void {
    console.log('OnInit');
    this.productService.getProducts().subscribe({
      next: (productArray: IProduct[]) => {
        this.products = productArray;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
