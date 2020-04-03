import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { DeliveryCostsComponent } from './components/delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './components/order/order-items/order-items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderComponent,
    DeliveryCostsComponent,
    OrderItemsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FechaPedidoModule { }
