import { Cliente } from './cliente.model';

class Order {
    constructor(
      public id: Cliente,
      public paymentOption: string,
      public orderItems: OrderItem[] = []
    ){}
  }
  
  class OrderItem {
    constructor(public quantity: number, public menuId: string){}
  }
  
  export {Order, OrderItem}