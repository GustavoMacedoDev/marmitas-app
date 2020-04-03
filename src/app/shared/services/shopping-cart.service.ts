import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';
import { CartItem } from '../models/cart-item.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  items: CartItem[] = [];

  constructor(private snackBar: MatSnackBar){}

  clear(){
    this.items = [];
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.idProduto === item.idProduto);
    if(foundItem){
      this.increaseQty(foundItem);
    }else{
      this.items.push(new CartItem(item));
    }
    this.snackBar.open(`Você adicionou o item ${item.nome}`);
  }

  increaseQty(item: CartItem){
    item.quantidade = item.quantidade + 1;
  }

  decreaseQty(item: CartItem){
    item.quantidade = item.quantidade - 1;
    if (item.quantidade === 0){
      this.removeItem(item);
    }
  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1)
    this.snackBar.open(`Você removeu o item ${item.menuItem.nome}`);
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value)=> prev+value, 0)
  }
}