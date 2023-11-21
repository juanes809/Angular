import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {

  @Input() title: String = "Generico"
  @Input() imgpeq: String = "Generico"
  @Input() img: String = "Generico"
  @Input() imgCMR: String = "Generico"
  @Input() descuento: String = "Generico"
  @Input() descuento_2: String = "Generico"
  @Input() descripcion: String = "Generico"
  @Input() descripcion_r: String = "Generico"
  @Input() promocion: String = "Generico"
}

