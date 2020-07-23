import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductCategory } from 'src/app/common/product-category';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  productForm: FormGroup;

  constructor(private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      unitPrice: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', Validators.required]
    });


    this.categories$ = this.productService.getProductCategories();
  }

  getErrorMessage(input) {
    if (input.hasError('required') ) {
      return 'Required';
    }
    if (input.hasError('min')) {
      return 'Unit price must be a number greater than 0';
    }
  }

  onSubmit() {
    this.productService.addProduct(this.productForm.value).subscribe(
      data => console.log(data)
    );

  }
}
