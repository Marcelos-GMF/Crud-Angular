import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produtos } from './../produtos/produtos.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private BASE_URL: string = 'http://localhost:3001/produtos';

  constructor(private snackBar: MatSnackBar,
              private httpClient: HttpClient) { }

  showMessage(msg: string){
    this.snackBar.open(msg,
      'X', //Equivale ao fechamento da SnackBar  
      {
      duration: 3000,
      horizontalPosition:"right",
      verticalPosition: "top"
    });
  }

  // Metodo de criação de um novo produto.
  incluirProduto(produto: Produtos): Observable<Produtos>{
     return this.httpClient.post<Produtos>(this.BASE_URL, produto);
  }

  // Ler os arquivos da aplicação
  read(): Observable<Produtos[]>{
    return this.httpClient.get<Produtos[]>(this.BASE_URL);
  }

}
