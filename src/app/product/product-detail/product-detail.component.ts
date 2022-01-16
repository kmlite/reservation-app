import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product : any
  constructor(private productService: ProductService,
  private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.product = products[+params.get('productId')!]
    this.route.paramMap.subscribe(params => {
      // this.product = this.productService.getProductsById(params.get('productId')!)
      const productObservable = this.productService.getProductsById(params.get('productId')!)
      productObservable.subscribe(
        (data) =>  {
          this.product = data
        },
        (err) => {

        }

      )
    })
  }

}
