import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto-selecao',
  templateUrl: './produto-selecao.component.html',
  styleUrls: ['./produto-selecao.component.css']
})
export class ProdutoSelecaoComponent implements OnInit {

  produto: Produto = new Produto();
  categoria: Categoria = new Categoria()
  idProduto: number;





  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {

    window.scroll(0, 0)

    if (environment.token == '')
      this.router.navigate(['/entrar'])

    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
    this.idProduto = id;

  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProduto(id).subscribe((resp: Produto) => {
      this.produto = resp
    })

  }


  // findByIdCategoria() {
  //   this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categoria) => {
  //     this.categoria = resp
  //   })
  // }

  // findAllCategorias() {
  //   this.categoriaService.getAllCategorias().subscribe((resp: Categoria[]) => {
  //     this.listaCategorias = resp
  //   })
  // }



}
