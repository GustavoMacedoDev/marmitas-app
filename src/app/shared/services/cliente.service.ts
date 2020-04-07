import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly PATH: string = 'api/cliente';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) { }

     listarClientes(): Observable<any> {
       return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
     }
}
