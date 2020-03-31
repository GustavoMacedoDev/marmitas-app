import { Routes, RouterModule } from '@angular/router';
import { CadastrarPedidoComponent } from './components/cadastrar-pedido';
import { NgModule } from '@angular/core';

export const PedidoRoutes: Routes = [
	{
		path: 'pedido',
		component: CadastrarPedidoComponent
		
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