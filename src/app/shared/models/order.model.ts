import { Cliente } from './cliente.model';
import { RefDto } from '../interfaces';

class Order {
    constructor(
      public cliente: RefDto,
      public paymentOption: string,
      public orderItems: OrderItem[] = []
    ){}
  }
  
  class OrderItem {
    constructor(public quantity: number, public menuId: string){}
  }
  
  export {Order, OrderItem}