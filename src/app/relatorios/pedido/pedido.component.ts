import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';
import * as jsPdf from 'jspdf';
import { ProdutoDto } from 'src/app/shared';
import { ProdutoService } from 'src/app/shared/services';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  
  produtos: ProdutoDto[];

  constructor(private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
    this.produtoService.listarProdutos().subscribe(res => this.produtos = res);
    console.log(this.produtos);
    console.log(this.data);
  }
  
  head = [['ID', 'Country', 'Rank', 'Capital']];
  data = [
    [1, 'Finland', 7.632, 'Helsinki'],
    [2, 'Norway', 7.594, 'Oslo'],
    [3, 'Denmark', 7.555, 'Copenhagen'],
    [4, 'Iceland', 7.495, 'Reykjavík'],
    [5, 'Switzerland', 7.487, 'Bern'],
    [9, 'Sweden', 7.314, 'Stockholm'],
    [73, 'Belarus', 5.483, 'Minsk'],
  ];

 

  createPdf() {
    var doc = new jsPdf();
 
    doc.setFontSize(18);
    doc.text('My PDF Table', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);
 
 
    (doc as any).autoTable({
      head: this.head,
      
      body: this.data,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })
 
    // Open PDF document in new tab
    doc.output('dataurlnewwindow')
 
    // Download PDF document  
   // doc.save('table.pdf');
  }

  

}
