import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { EquipeComponent } from './equipe/equipe.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

const routes: Routes = [
  {path: '', redirectTo: 'entrar', pathMatch: 'full'},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'rodape', component: RodapeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'equipe', component: EquipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
