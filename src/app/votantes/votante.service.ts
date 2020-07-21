import { Injectable } from '@angular/core';
import { Votantedata } from './votantes.json';
import { Votante } from './votante';
import { of,Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotanteService {

  private urlEndPoint:string = 'http://localhost:8080/api/votantes';
  constructor(private http:HttpClient) { }

  getVotantes():  Observable<Votante[]> {
    //return  of(Votantedata);
    return this.http.get<Votante[]>(this.urlEndPoint)
  }
}
