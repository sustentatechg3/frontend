import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { CadastrarComponent } from './cadastrar/cadastrar-usuario/cadastrar-usuario.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipeComponent } from './equipe/equipe.component';
import { CadastrarProdutoComponent } from './cadastrar/cadastrar-produto/cadastrar-produto.component';
import { CadastrarCategoriaComponent } from './cadastrar/cadastrar-categoria/cadastrar-categoria.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { HeaderComponent } from './header/header.component';
import { ProdutoSelecaoComponent } from './produto-selecao/produto-selecao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    ContatoComponent,
    CadastrarComponent,
    EntrarComponent,
    InicioComponent,
    EquipeComponent,
    CadastrarProdutoComponent,
    CadastrarCategoriaComponent,
    CategoriaEditComponent,
    ProdutoEditComponent,
    ProdutoDeleteComponent,
    CategoriaDeleteComponent,
    HeaderComponent,
    ProdutoSelecaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
