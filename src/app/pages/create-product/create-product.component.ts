import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };
  productId: string | null = null;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productId = productId;
    this.productService.getProductById(productId).subscribe((product) => {
      this.product = product;
    });
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado');
      this.router.navigate(['/products']);
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe((product) => {
      this.productService.showMessage('Produto Atualizado');
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['products']);
  }
}
