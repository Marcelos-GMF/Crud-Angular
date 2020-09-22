import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-crud',
  templateUrl: './produtos-crud.component.html',
  styleUrls: ['./produtos-crud.component.css']
})
export class ProdutosCrudComponent implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit(): void {
  }

  telaIncluir() {
     this.rota.navigate(['/produtos/criados']);
  }


}
