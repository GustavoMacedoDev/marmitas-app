import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMesaComponent } from '../../restaurantes/lista-restaurantes/components/lista-mesa/lista-mesa.component';

export const MesaRoutes: Routes = [
	{
		path: 'lista-mesa',
		component: ListaMesaComponent
	}
	
];

@NgModule({
  imports: [ RouterModule.forChild(MesaRoutes) ],
  exports: [ RouterModule ]
})
export class MesaRoutingModule {
}