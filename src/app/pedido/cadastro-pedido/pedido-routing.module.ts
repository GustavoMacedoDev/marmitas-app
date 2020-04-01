import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';

export const PedidoRoutes: Routes = [
	{
		path : 'pedido', component: MenuComponent
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(PedidoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PedidoRoutingModule {
}