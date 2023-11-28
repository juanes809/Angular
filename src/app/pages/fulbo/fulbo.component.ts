import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FulbitoComponent } from '../../component/fulbito/fulbito.component';
@Component({
  selector: 'app-fulbo',
  standalone: true,
  imports: [CommonModule,FulbitoComponent],
  templateUrl: './fulbo.component.html',
  styleUrl: './fulbo.component.css'
})
export class FulboComponent {

}
