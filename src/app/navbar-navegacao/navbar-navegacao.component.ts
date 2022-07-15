import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-navbar-navegacao',
  templateUrl: './navbar-navegacao.component.html',
  styleUrls: ['./navbar-navegacao.component.css']
})

export class NavbarNavegacaoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  idUsuario = environment.id;
  
  

  constructor(
    private router: Router,
    private authService: AuthService
    
  ) { }

  ngOnInit(): void {
  }
  

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
