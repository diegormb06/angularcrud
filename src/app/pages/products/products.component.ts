import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/Product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router, private productService: ProductService) {}

  displayedColumns: string[] = ['id', 'name', 'price', 'action'];
  dataSource: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.dataSource = products;
    });
  }

  async navigateToProductCreate() {
    await this.router.navigate(['products/create']);
  }

  deleteProduct(id: string): void {
    console.log(id);
    this.productService.deleteProduct(id).subscribe((_) => {
      this.dataSource = this.dataSource.filter((item) => item.id !== id);
      this.productService.showMessage('Produto deletado com sucesso!');
    });
  }
}
