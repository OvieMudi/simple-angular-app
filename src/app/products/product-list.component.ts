import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {
    this.filteredProducts = this.products;
    this.filterTerm = '';
  }

  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  products: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'assets/images/leaf_rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
  ];

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

  ngOnInit(): void {
    console.log('OnInit');
  }
}
