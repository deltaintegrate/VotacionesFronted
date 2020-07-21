import { Component, OnInit } from '@angular/core';
import { Votante } from './votante';
import { VotanteService } from './votante.service';



@Component({
  selector: 'app-votantes',
  templateUrl: './votantes.component.html',
  styleUrls: ['./votantes.component.css']
})
export class VotantesComponent implements OnInit {

  votantecons: Votante[];

  constructor(private votante_service: VotanteService ) { }

  ngOnInit() {
    this.votante_service.getVotantes().subscribe(
      votantecons => this.votantecons = votantecons
    );
  }

}
