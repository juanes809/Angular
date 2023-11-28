import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from '../../tarjeta/tarjeta.component';
@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule,TarjetaComponent],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

}
