import { Injectable } from '@angular/core';
import { ProdutoDto, Cart } from '../interfaces';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public storage: StorageService) { }

  createOrClearCart() : Cart {
    let cart: Cart = {itens: []};
    this.storage.setCart(cart);
    return cart;
}

  getCart() : Cart {
    let cart: Cart = this.storage.getCart();
    if (cart == null) {
        cart = this.createOrClearCart();
    }
    return cart;
}


  addProduto(produto: ProdutoDto) : Cart {
    let cart = this.getCart();
    let position = cart.itens.findIndex(x => x.produto.idProduto == produto.idProduto);
    if (position == -1) {
        cart.itens.push({quantidade: 1, produto: produto});
    }
    this.storage.setCart(cart);
    return cart;

    
  }
}
