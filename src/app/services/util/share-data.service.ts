import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private personagem = new BehaviorSubject<any>(null);
  currentPersonagem = this.personagem.asObservable();

   constructor() { }

  setPersonagem(personagem:any){
    this.personagem.next(personagem);
  }

}
