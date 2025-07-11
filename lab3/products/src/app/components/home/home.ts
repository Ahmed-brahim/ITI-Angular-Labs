import { Component , inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../../interface/product/iproduct';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {private http = inject(HttpClient);

  Products: Iproduct[] = [];
  fillterdProducts: Iproduct[] = [];

  ngOnInit(): void {
    this.http
      .get('products.json')
      .subscribe((data) => {
        this.Products = data as Iproduct[]; 
        this.fillterdProducts = this.Products;
      } );
  }

  getStarsArray(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getAveRaating(product: Iproduct): number {
    const avg =
      product.reviews.reduce((total, review) => total + review.rating, 0) /
      product.reviews.length;

    return +avg.toFixed(1);
  }

  filterProducts(event: any): void {
  const selectedCategory = event.target.value.trim().toLowerCase();
  if (selectedCategory === '') {
    this.fillterdProducts = this.Products;
  } else {
    this.fillterdProducts = this.Products.filter(
      (product) => product.title.toLowerCase().includes(selectedCategory)
    );
  }
}}
