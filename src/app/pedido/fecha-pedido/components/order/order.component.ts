import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { OrderService } from 'src/app/shared/services/order.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { Order, OrderItem } from 'src/app/shared/models/order.model';
import { RadioOption } from 'src/app/shared/radio/radio-option.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  telPattern = /[0-9]{2}[0-9]{5}[0-9]{4}/;

  numberPattern = /^[0-9]*$/;

  orderForm: FormGroup;

  delivery: number = 3;

  public paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ] 

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = new FormGroup({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      telefone: this.formBuilder.control('', [Validators.required, Validators.pattern(this.telPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validators: [OrderComponent.equalsTo], updateOn: 'blur'})
  }

  static equalsTo(group: AbstractControl): {[key:string]: boolean} {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email || !emailConfirmation){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: Order){
    console.log(order);
    order.orderItems = this.cartItems()
      .map((item:CartItem)=>new OrderItem(item.quantidade, item.menuItem.idProduto))
    this.orderService.checkOrder(order)
      .subscribe( (orderId: string) => {
        this.router.navigate(['/order-summary'])
        this.orderService.clear()
    })
    console.log(order)
  }

}
