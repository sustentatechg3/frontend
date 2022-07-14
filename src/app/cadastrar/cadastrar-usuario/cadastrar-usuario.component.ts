import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/Usuario';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario()
  confirmarSenha: string
  // tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

  }
  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }
  // tipoUser(event: any){
  //   this.tipoUsuario = event.target.value
  // }
  cadastrar(){
   //this.usuario.usuario = this.tipoUsuario

    if(this.usuario.senha != this.confirmarSenha){
      alert("As senhas estão incorretas.")


    } else{
        this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp
          this.router.navigate(['/entrar'])
          alert("Usuário cadastrado com sucesso!")
        })
    }
  }

}
