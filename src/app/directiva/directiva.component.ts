import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent  {

  listaVotantes:string[] = ['typescript','php','c#'];
  habilitar:boolean = true;
  constructor() { }
  SetHabilitar(): void{
    this.habilitar = (this.habilitar==false)? true:false
  }
}
