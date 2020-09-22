import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProdutosCrudComponent } from './views/produtos-crud/produtos-crud.component';
import { ProdutosCriadosComponent } from './components/produtos/produtos-criados/produtos-criados.component';

const routes: Routes = [
  {
   path:"",
   component: HomeComponent
  }, 
  {
  path: "produtos",
  component: ProdutosCrudComponent
  }, 
  {
  path: "produtos/criados",
  component: ProdutosCriadosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
