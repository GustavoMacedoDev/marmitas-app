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
import { FormaPagamento } from 'src/app/shared/models/forma-pagamento.model';
import { FormaPagamentoService } from 'src/app/shared/services/forma-pagamento.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  myControl = new FormControl();
  delivery: number = 3;
  clienteId: string;
  clientes: Cliente[];
  @ViewChild(MatSelect) matSelect: MatSelect;

  formasPagamento: FormaPagamento[];

  constructor(private orderService: OrderService,
              private router: Router,
              private formBuilder: FormBuilder,
              private clienteService: ClienteService,
              private formaPagamentoService: FormaPagamentoService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.listarClientes();
    this.listarFormasPagamento();
    console.log(this.formasPagamento);
    this.orderForm = new FormGroup({
      cliente: this.formBuilder.control('', [Validators.required]),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, {validators: [OrderComponent.equalsTo], updateOn: 'blur'});
    
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

  listarClientes() {
    return this.clienteService.listarClientes().subscribe(res => this.clientes = res);
  }

  listarFormasPagamento(){
    return this.formaPagamentoService.listarFormasPagamento()
    .subscribe(res => this.formasPagamento = res);
    
  }

}