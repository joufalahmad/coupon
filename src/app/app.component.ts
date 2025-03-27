import { Component } from '@angular/core';

type Product = {
  'id': number,
  'name': string,
  'price': number
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'تطبيق الكوبون';
  couponcode: string = '';
  iscouponvalid: boolean = false;
  product: Product = {
    id: 1,
    name: 'جهاز Apple MacBook Pro',
    price: 5000  
  };
  discountedPrice: number = this.product.price;
  array: string[] = ["JO", "JA"];

  checkcoupons() {
    if (this.array.includes(this.couponcode)) {
      this.iscouponvalid = true;
      this.applyDiscount();
    } else {
      this.iscouponvalid = false;
    }
  }

  applyDiscount() {
    this.discountedPrice = this.product.price * 0.97;
  }
}
