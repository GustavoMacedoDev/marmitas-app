import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { OrderService } from 'src/app/shared/services/order.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { Order, OrderItem } from 'src/app/shared/models/order.model';
import { RadioOption } from 'src/app/shared/radio/radio-option.model';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { MatSelect } from '@angular/material/select';

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
  myControl = new FormControl();
  delivery: number = 3;
  clienteId: string;
  clientes: Cliente[];
  @ViewChild(MatSelect) matSelect: MatSelect;

  cliente : Cliente;

  public paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ] 

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder,
              private clienteService: ClienteService,
              private fb: FormBuilder) { }

  ngOnInit() {
    
    this.orderForm = new FormGroup({
      cliente: this.formBuilder.control('', [Validators.required]),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validators: [OrderComponent.equalsTo], updateOn: 'blur'});
    this.listarClientes();
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

  findByTelefone() {
    const telefoneCliente: Cliente = this.orderForm.value.telefone;
    return this.clienteService.findByTelefone(telefoneCliente)
      .subscribe(res => this.cliente = res);
  }

  listarClientes() {
    return this.clienteService.listarClientes().subscribe(res => this.clientes = res);
  }

}