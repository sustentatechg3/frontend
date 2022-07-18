import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AppComponent } from '../app.component';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaProdutos: Produto[];
  listaCategorias: Categoria[];
  usuario: Usuario;

  categoria: Categoria;
  listaFrutas: Produto[];
  descricao: string;
  lista: Produto[]
  nomeProdutoBuscado: string;
  listaProdutosBuscados: Produto[];


  // listaDeProdutosComprados: Produto[];

  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    // private listas: CarrinhoComponent
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    // alert(this.usuario.nome)

    if (environment.token == '')
      this.router.navigate(['/entrar'])

    this.findAllProdutos();
    this.findByDescricao();
    this.findAllCategoria();
    // alert(this.usuario.tipo);


    // this.lista = this.app.lista;
    // this.lista.forEach(obj => {
    //   alert(obj.nome);
    // });



  }

  // findAllFrutas() {
  //   this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
  //     this.listaProdutos = resp;
  //   })
  //   this.listaFrutas = this.listaProdutos.filter(obj => obj.categoria.tipo == 'frutas');

  // }

  findByDescricao() {
    this.produtoService.getByDescricao('frutas frescos').subscribe((res: any[]) => {
      this.listaFrutas = res;
    })
  }

  findAllCategoria() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp;
    })
  }

  goProducts() {
    this.router.navigate(['/produtos-buscados'], { queryParams: { order: 'popular' } });
  }






  findAllProdutos() {
    this.produtoService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProdutos = resp;
    })
  }

//   registraHistoricoUsuario(){
//     this.usuario.produto = this.listaDeProdutosComprados;
//   }
}