import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderComponent } from './components/order/order.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { ListaPedidoComponent } from './components/lista-pedido/lista-pedido.component';

export const FechaPedidoRoutes: Routes = [
	{
    path : 'order', component: OrderComponent
        
  },
  {
    path: 'order-confirmation', component: OrderConfirmationComponent
  },
  {
    path: 'lista-pedido', component: ListaPedidoComponent
  },
  {
    path: 'lista-pedido/listar/:id', component: ListaPedidoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(FechaPedidoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FechaPedidoRoutingModule {
}