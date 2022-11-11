import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    title: new FormControl<string>('', [Validators.required,
    Validators.minLength(6)])
  });

  constructor(private productService:ProductService, public modalService : ModalService) {}

  ngOnInit(): void {}

  submit(){
    this.productService.create({
        title: this.form.value as string,
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating:{
          rate: 42,
          count : 41
        }
    }).subscribe(()=>{
      this.modalService.close()
    })
  }

  get title() {
    return this.form.controls.title as FormControl
  }
}
