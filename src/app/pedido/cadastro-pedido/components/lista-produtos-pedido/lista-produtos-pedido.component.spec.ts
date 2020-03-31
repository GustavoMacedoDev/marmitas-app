import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdutosPedidoComponent } from './lista-produtos-pedido.component';

describe('ListaProdutosPedidoComponent', () => {
  let component: ListaProdutosPedidoComponent;
  let fixture: ComponentFixture<ListaProdutosPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaProdutosPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaProdutosPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
