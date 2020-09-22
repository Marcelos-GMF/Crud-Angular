import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from './../produtos.service';
import { Produtos } from '../produtos.modelo';

@Component({
  selector: 'app-produtos-criados',
  templateUrl: './produtos-criados.component.html',
  styleUrls: ['./produtos-criados.component.css']
})
export class ProdutosCriadosComponent implements OnInit {

  produto: Produtos = {
    nome: '',
    preco: null
  }

  constructor(private servico: ProdutosService,
              private rota: Router) { }

  ngOnInit(): void {
  }

  incluir(){
    this.servico.incluirProduto(this.produto).subscribe(() => {

      this.servico.showMessage("Produto inserido com sucesso!");
      this.cancelar();
    })

  }

  cancelar(){
    this.rota.navigate(['/produtos']);
  }


 
}
