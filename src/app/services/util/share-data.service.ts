import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private personagem = new BehaviorSubject<any>(null);
  currentPersonagem = this.personagem.asObservable();

  private personagems = new BehaviorSubject<any>(null);
  currentPersonagems = this.personagems.asObservable();

   constructor() { }

  setPersonagem(personagem:any){
    this.personagem.next(personagem);
  }

  setPersonagems(personagems:any){
    this.personagems.next(personagems);
  }

}
