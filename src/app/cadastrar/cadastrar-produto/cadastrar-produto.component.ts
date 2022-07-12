import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/Categoria';
import { Produto } from 'src/app/model/Produto';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  listaCategorias: Categoria[]
  produtoService: ProdutoService
  produto: Produto

  constructor(
   private router: Router,
   private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '')
      this.router.navigate(['/entrar'])

    this.findAllCategorias()



    console.log(this.listaCategorias)


  }

  findAllCategorias() {
    this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
      this.listaCategorias = resp
    })
  }

  cadastrar() {
    this.produtoService.postProduto(this.produto).subscribe((resp: Produto) =>{
      this.produto = resp
    })
  }



}