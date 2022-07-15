import { Component } from '@angular/core';
import { Produto } from './model/Produto';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoIntegradorFront';
  lista: Produto[];


  constructor(
    public auth: AuthService
  ) {

  }
}
