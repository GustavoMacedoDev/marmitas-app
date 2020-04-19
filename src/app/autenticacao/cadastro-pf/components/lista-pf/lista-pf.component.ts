import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-lista-pf',
  templateUrl: './lista-pf.component.html',
  styleUrls: ['./lista-pf.component.css']
})
export class ListaPfComponent implements OnInit {

  clientes: Cliente[];

  constructor(
              private clienteService: ClienteService
              ) { }

  ngOnInit(): void {
    this.clienteService.listarClientes()
      .subscribe(res => this.clientes = res);
  }

}
