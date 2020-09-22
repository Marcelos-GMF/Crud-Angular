import { Component, OnInit } from '@angular/core';
import { Produtos } from '../produtos.modelo';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-read',
  templateUrl: './produtos-read.component.html',
  styleUrls: ['./produtos-read.component.css']
})
export class ProdutosReadComponent implements OnInit {

  listaProdutos: Produtos[];
  displayedColumns = ['id','nome','preco'];

  constructor(private servico: ProdutosService) { }

  ngOnInit(): void {
    this.pesquisarProdutos();
  }

  // Pesquisa os dados no Backend.
  pesquisarProdutos() {
    this.servico.read().subscribe((resposta: Produtos[]) => {
      this.listaProdutos = resposta; 
    });
  }

}
