import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-armazenar',
  templateUrl: './armazenar.component.html',
  styleUrls: ['./armazenar.component.css']
})
export class ArmazenarComponent implements OnInit {

  listaDeProdutos: Produto[];

  constructor() { }

  ngOnInit(): void {
  }

  

  limpar(){
    this.listaDeProdutos.forEach(prods => {
      this.listaDeProdutos.pop;
    });
  }

}
