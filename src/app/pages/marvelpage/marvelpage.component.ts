import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelComponent } from '../../component/marvel/marvel.component';
@Component({
  selector: 'app-marvelpage',
  standalone: true,
  imports: [CommonModule, MarvelComponent],
  templateUrl: './marvelpage.component.html',
  styleUrl: './marvelpage.component.css'
})
export class MarvelpageComponent {

}
