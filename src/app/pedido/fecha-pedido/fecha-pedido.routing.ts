import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderComponent } from './components/order/order.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

export const FechaPedidoRoutes: Routes = [
	{
    path : 'order', component: OrderComponent
        
  },
  {
    path: 'order-confirmation', component: OrderConfirmationComponent
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