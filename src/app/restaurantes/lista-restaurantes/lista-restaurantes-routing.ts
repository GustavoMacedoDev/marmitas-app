import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestauranteDetailComponent } from './components/restaurante-detail/restaurante-detail.component';
import { MenuComponent } from './components/restaurante-detail/menu/menu.component';


export const listaRestaurantesRotes: Routes = [
	{
		path: 'restaurants',
		component: RestaurantsComponent,
		
  },
  {
    path: 'restaurants/:id', component: RestauranteDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
    ]
  }
  
  
];

@NgModule({
  imports: [
  	RouterModule.forChild(listaRestaurantesRotes)
  ],
  exports: [
    RouterModule
  ]
})
export class ListaRestaurantesRoutingModule {
}