import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from 'src/app/shared/models/menu-item.model';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/shared/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(private produtoService: ProdutoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.produtoService.listarProdutos();
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}
