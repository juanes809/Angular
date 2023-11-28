import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../card/card.component';
@Component({
  selector: 'app-fulbito',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './fulbito.component.html',
  styleUrl: './fulbito.component.css'
})
export class FulbitoComponent {
futbolistas =[
  {
    nombre: "Messi",
    apodo: "la pulga",
    equipo: "Barcelona",
    liga: "Española",
    imagen: "https://estaticos.sport.es/resources/jpg/0/7/leo-messi-ficha-bio-utilizar-1375639723270.jpg"
  },
  {
    nombre: "Ronaldinho",
    apodo: "el muelon",
    equipo: "Barcelona",
    liga: "Española",
    imagen: "https://strikers.futbol/__export/1681684200191/sites/strikers/img/2022/12/20/ronaldinho_barcelona.jpg_264373126.jpg"
  },
  {
    nombre: "Cristiano Ronaldo",
    apodo: "el bicho",
    equipo: "Real Madrid",
    liga: "Española",
    imagen: "https://www.directvsports.com/__export/1700857406150/sites/dsports/img/2023/11/24/20231124_052325671_lim4utzad0nd1gh18s0dfs7k0.jpg_1301049368.jpg"
  },
  {
    nombre: "Falcao",
    apodo: "el tigre",
    equipo: "Atletico de Madrid",
    liga: "Española",
    imagen: "https://caracoltv.brightspotcdn.com/dims4/default/ae1516b/2147483647/strip/true/crop/1000x1249+0+0/resize/1000x1249!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F09%2F80%2F4557fb4e494db788a58f84693df7%2Ff92so4yxmaant07.jpg"
  },
  {
    nombre: "Salah",
    apodo: "el faraon",
    equipo: "Liverpool",
    liga: "Inglaterra",
    imagen: "https://www.directvsports.com/__export/1685065913797/sites/dsports/img/2023/05/25/20230525_105153473_1vm9ia1d0w3mr1wj9cet1hq5pk.jpg_1301049368.jpg"
  },
  {
    nombre: "Halaand",
    apodo: "Androide",
    equipo: "Man City",
    liga: "Inglaterra",
    imagen: "https://caracoltv.brightspotcdn.com/dims4/default/108d767/2147483647/strip/true/crop/1024x682+0+0/resize/1000x666!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fb8%2Fd0%2F3bda971643af9630da88728446be%2F000-33zh4t7.jpg"
  },
  {
    nombre: "Son",
    apodo: "Sonaldo",
    equipo: "Spurs",
    liga: "Inglaterra",
    imagen: "https://i2-prod.football.london/tottenham-hotspur-fc/news/article23669886.ece/ALTERNATES/s615/0_GettyImages-1390539425.jpg"
  },
]
}
