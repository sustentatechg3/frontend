import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produto } from '../model/Produto';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  static listaDeProdutos: Produto[] = [];
  lista2: Produto[] = [];
  valorTotal: number = 0;

  

  // idUsuario = environment.id;
  // usuario: Usuario = new Usuario();
  // authService: AuthService;

  listaVendedores: Usuario[] = [];

  reduced: Usuario[] = [];











  constructor(
    // private auth: AuthService,
    // private router?: Router,
    // private produtoService?: ProdutoService,
    // private categoriaService?: CategoriaService,


  ) { }

  // constructor(a: boolean)

  ngOnInit() {

    // if (environment.token == '')
    //   this.router.navigate(['/entrar'])
    // this.findByIdUsuario();
    // CarrinhoComponent.limpar();
    this.lista2 = CarrinhoComponent.listaDeProdutos;

    // alert('atualliza lista2')
    this.atualizaCopiaDaLista();
    // alert('ler lista2')
    // this.ler();
    this.valorTotalPagar();
    this.buscaVendedoresProdutos()
  }

  // findByIdUsuario() {
  //   this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
  //     this.usuario = resp
  //   })
  // }





  static limpar() {
    // CarrinhoComponent.listaDeProdutos.forEach(prods => {
    //   CarrinhoComponent.listaDeProdutos.pop(prods);
    // });
    CarrinhoComponent.listaDeProdutos = [];

  }

  ler() {
    this.atualizaCopiaDaLista();
    this.lista2.forEach(p => {
      alert(p.nome)
    });


    alert('sta list')
    CarrinhoComponent.listaDeProdutos.forEach(p => {
      alert(p.nome)
    });
  }

  atualizaCopiaDaLista() {
    this.lista2 = CarrinhoComponent.listaDeProdutos;
  }

  removerProduto(posicao: number) {

    CarrinhoComponent.listaDeProdutos.splice(posicao)
    this.valorTotalPagar();
    this.atualizaCopiaDaLista();
    this.buscaVendedoresProdutos();
  }

  valorTotalPagar() {
    let valorProdutos = 0;
    this.lista2.forEach(prod => {

      valorProdutos += prod.valor;

    });
    this.valorTotal = valorProdutos;
  }

  compraRealizada() {
    // this.lista2.forEach((prod: Produto)=>{
    //   alert(this.usuario.nome + ' comprou ' + prod.nome)
    //   this.usuario.produto.push(prod)
    // })
    CarrinhoComponent.limpar();
    this.atualizaCopiaDaLista();

    // this.usuario.pro
    // alert('limpar')
    alert('Compra realizada! \n Você acabou de contribuir para o crescimento de ONGs sustentáveis')

  }

  buscaVendedoresProdutos() {
    // var reduced = [];

    this.lista2.forEach(prod => {
      this.listaVendedores.push(prod.usuario)
    });

    // filtrando vendedores repetidos
    this.listaVendedores.forEach((item) => {
      var duplicated = this.reduced.findIndex(redItem => {
        return item.usuario == redItem.usuario;
      }) > -1;

      if (!duplicated) {
        this.reduced.push(item);
      }
    });


  }


}
