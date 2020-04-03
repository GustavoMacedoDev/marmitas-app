import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { OrderComponent } from './components/order/order.component';

export const FechaPedidoRoutes: Routes = [
	{
        path : 'order', component: OrderComponent
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