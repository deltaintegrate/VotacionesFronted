import { Component, OnInit } from '@angular/core';
import { Votante } from './votante';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {


  private votantes: Votante = new Votante()
  private titulo:string = "crear cliente"
  constructor() { }

  ngOnInit() {
  }

  public create(): void{
    console.log("clickeado")
    console.log(this.votantes)
  }
}
