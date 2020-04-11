import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './components/order/order.component';
import { DeliveryCostsComponent } from './components/delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './components/order/order-items/order-items.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from 'src/app/shared/input/input.component';
import { RadioComponent } from 'src/app/shared/radio/radio.component';
import { CadastroPedidoModule } from '../cadastro-pedido';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [
    OrderComponent,
    DeliveryCostsComponent,
    OrderItemsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule,
    SharedModule,
    CadastroPedidoModule,
    MatAutocompleteModule
    
  ],
  exports: [MatAutocompleteModule]
  })
export class FechaPedidoModule { }
