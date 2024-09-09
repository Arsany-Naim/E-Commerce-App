import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ProductsService } from '../../core/services/products.service';
import { Product } from '../../core/interfaces/product';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ProductDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  allProducts:Product[] = []

  constructor(private _ProductsService:ProductsService){ }

  getProducts = () => {
    this._ProductsService.getProducts().subscribe({
      next: (res) => {
        this.allProducts = res.data;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnInit(): void {
    this.getProducts()
  }

}
