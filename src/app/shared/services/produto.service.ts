import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly PATH: string = 'api/produto';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) { }

     listarProdutos(): Observable<any> {
       return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
     }
}
