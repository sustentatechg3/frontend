import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar (usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://sustentatech.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar (usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://sustentatech.herokuapp.com/usuarios/cadastrar', usuario)
  }

  atualizar(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>('https://sustentatech.herokuapp.com/usuarios/atualizar', usuario);

  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }
    

    return ok
  }

  deslogado(){
    if(!this.logado())
    return true;
    return false;
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`https://sustentatech.herokuapp.com/usuarios/${id}`, this.token)
  }

  
}
