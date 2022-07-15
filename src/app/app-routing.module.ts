import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCategoriaComponent } from './cadastrar/cadastrar-categoria/cadastrar-categoria.component';
import { CadastrarProdutoComponent } from './cadastrar/cadastrar-produto/cadastrar-produto.component';
import { CadastrarComponent } from './cadastrar/cadastrar-usuario/cadastrar-usuario.component';
import { ContatoComponent } from './contato/contato.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { EquipeComponent } from './equipe/equipe.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { ProdutoSelecaoComponent } from './produto-selecao/produto-selecao.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },
  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'rodape', component: RodapeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'cadastrar-produto', component: CadastrarProdutoComponent },
  { path: 'cadastrarCategoria', component: CadastrarCategoriaComponent },
  { path: 'categoria-edit/:id', component: CategoriaEditComponent },
  { path: 'categoria-delete/:id', component: CategoriaDeleteComponent },
  { path: 'produto-edit/:id', component: ProdutoEditComponent },
  { path: 'produto-delete/:id', component: ProdutoDeleteComponent },
  { path: 'header', component: HeaderComponent},
  {path: 'produto-selecao/:id', component: ProdutoSelecaoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
