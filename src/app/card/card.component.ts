import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{

  public image:string = "./assets/McDonalds-logo.png" ;
  public Titulo:string = "Curso de Angular con Interpolación";
  @Input() dataEntrante: any;

  constructor() {}

  ngOnInit(): void {
    
  }

}
