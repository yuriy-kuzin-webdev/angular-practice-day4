import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductService } from './services/products.service';
import { Observable} from 'rxjs'
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  
  products$: Observable<IProduct[]>
  term: ''

  constructor(private productsService: ProductService, public modalService:ModalService) {}
  ngOnInit(): void {

    
    this.products$ = this.productsService.getAll()
    
    this.loading = true;
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
      this.loading = false;
    });
  }
  title = 'angular-practice-day4';
  products: IProduct[] = [];
  loading = false;
}
