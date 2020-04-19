import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private readonly PATH: string = 'api/pedido/';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) { }

     listarPedidos(): Observable<any>{
       return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
     }

     listaPedidoById(id: number): Observable<any> {
       console.log(id);
       return this.httpClient.get(env.baseUrl + this.PATH + id, this.httpUtil.headers());
     }

}