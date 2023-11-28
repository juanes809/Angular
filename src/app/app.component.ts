import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { LoginComponent } from './components/login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TarjetaComponent, RouterModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo de Angular';
  public contador: number = 10;

  Incrementar(value : number):void{
    this.contador += value;
    if (this.contador < 10) {
      this.contador = 10;
    }
  }
}

