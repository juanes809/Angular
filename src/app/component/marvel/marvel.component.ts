import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marvel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marvel.component.html',
  styleUrl: './marvel.component.css'
})
export class MarvelComponent {

  nombresuperHeroeDui = "Loki"
  nombresuperHeroeJacob = "Iron Man"
  estasBien = true

  personajes = [{
    name: "Iron Man",
    poderes: "es rico y un traje",
    grupo: "vengadores",
    estado: "muerto",
    imagen: "https://hips.hearstapps.com/hmg-prod/images/iron-man-marvel-endgame-1556615552.jpg?crop=0.565xw:1.00xh;0.225xw,0&resize=1200:*"
  },
  {
    name: "Batman",
    poderes: "es rico y un traje",
    grupo: "Liga Justicia",
    estado: "Despedido",
    imagen: "https://media.revistagq.com/photos/61eab362372e53e4216accc8/3:2/w_2526,h_1684,c_limit/the-batman-duracion.jpeg"
  },
  {
    name: "Loki",
    poderes: "Mago",
    grupo: "TVA",
    estado: "Dios",
    imagen:"https://media.gq.com.mx/photos/5be9c257cad2d9793b21ee4c/4:3/w_2664,h_1998,c_limit/tom_hiddleston_nueva_serie_loki_disney_7039.jpg",
  },
  {
    name: "Hulk",
    poderes: "se enoja",
    grupo: "Vengaodres",
    estado: "Vivo",
    imagen: "https://sm.ign.com/t/ign_es/blogroll/t/thor-ragna/thor-ragnarok-character-posters_rn7k.1280.jpg"
  }
  ]
}
