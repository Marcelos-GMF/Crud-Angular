import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProdutosRead2DataSource } from './produtos-read2-datasource';
import { Produtos } from '../produtos.modelo';

@Component({
  selector: 'app-produtos-read2',
  templateUrl: './produtos-read2.component.html',
  styleUrls: ['./produtos-read2.component.css']
})
export class ProdutosRead2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Produtos>;
  dataSource: ProdutosRead2DataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'nome', 'preco'];

  ngOnInit() {
    this.dataSource = new ProdutosRead2DataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
