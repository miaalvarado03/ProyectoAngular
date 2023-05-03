import { Component, OnInit } from '@angular/core';

//Crear una interfaz
interface Tarjeta{
  titulo: string;
  subtitulo: string;
  image: string;
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'MI primer app en angular';
  public ArregloTarjeta : Tarjeta []= []; //variable de tipo arreglo

  ngOnInit(): void { // Es un metodo de tipo void que se inicializa cuando se ejecuta la pagina
    this.ArregloTarjeta= [ // cargamos datos al arreglo
      {titulo: 'video 1', subtitulo: 'subtitulo de video',image:"./assets/img/img1.jpg"},
      {titulo: 'video 2', subtitulo: 'subtitulo de video',image:"./assets/img/img2.jpg"},
      {titulo: 'video 3', subtitulo: 'subtitulo de video',image:"./assets/img/img3.jpg"},
      {titulo: 'video 4', subtitulo: 'subtitulo de video',image:"./assets/img/img4.jpg"},
      {titulo: 'video 5', subtitulo: 'subtitulo de video',image:"./assets/img/img5.jpg"},

    ]
  }


}