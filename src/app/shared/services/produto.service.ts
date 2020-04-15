import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpUtilService } from './http-util.service';
import { Observable } from 'rxjs';
import { environment as env} from 'src/environments/environment';
import { ProdutoDto } from '..';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly PATH: string = 'api/produtos';
  private readonly PATHCADASTRO: string = 'api/produto';
  private readonly PATHBUSCA: string = 'api/produto/';

  constructor(public httpClient: HttpClient,
     public httpUtil: HttpUtilService) { }

  listarProdutos(): Observable<any> {
    return this.httpClient.get(env.baseUrl + this.PATH, this.httpUtil.headers());
  }

  listaProdutosPorCategoria(id: string) : Observable<any>{
    console.log(id);
    return this.httpClient.get(env.baseUrl + this.PATHBUSCA + id, this.httpUtil.headers());
  }

  cadastrar(produto: ProdutoDto) : Observable<any> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(env.baseUrl + this.PATHCADASTRO, produto, this.httpUtil.headers());
  }
}
