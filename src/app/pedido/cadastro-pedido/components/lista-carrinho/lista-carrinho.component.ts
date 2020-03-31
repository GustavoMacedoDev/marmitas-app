import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartItem } from 'src/app/shared/models/cart-item.model';

@Component({
  selector: 'app-lista-carrinho',
  templateUrl: './lista-carrinho.component.html',
  styleUrls: ['./lista-carrinho.component.css']
})
export class ListaCarrinhoComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() increaseQty = new EventEmitter<CartItem>();
  @Output() decreaseQty = new EventEmitter<CartItem>();
  @Output() remove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItem){
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CartItem){
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CartItem){
    this.remove.emit(item);
  }
}
