import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { CadastroProdutoComponent } from './components/cadastro-produto.component';


export const CadastroPfRoutes: Routes = [
	{
		path: 'cadastro-produto',
		component: CadastroProdutoComponent,
		children: [
		  {
			path: '', 
			component: CadastrarProdutoComponent
		  }
		]
	}
];

@NgModule({
  imports: [
  	RouterModule.forChild(CadastroPfRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadastroProdutoRoutingModule {
}