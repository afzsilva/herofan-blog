import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personagem } from 'src/app/model/personagem.model';
import { Personagems } from 'src/app/model/personagems-list.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiheroService {

  private _URL = environment.url;

  constructor(private http:HttpClient){

  }

  getHeroBigCard(id:any):Observable<Personagem>{
    return this.http.get<Personagem>(`${this.getCorsProxiedUrl(this._URL)}/${id}`);
  }

  getListHeroes(caractere:string):Observable<Personagems<Personagem>>{
    return this.http.get<Personagems<Personagem>>(`${this.getCorsProxiedUrl(this._URL)}/search/${caractere}`);
  }

  getSmallCardList():Observable<Personagems<Personagem>>{
    return this.http.get<Personagems<Personagem>>(`${this.getCorsProxiedUrl(this._URL)}/search/${"A"}`);
  }
 private getCorsProxiedUrl(url: string): string
 {
    return `https://thingproxy.freeboard.io/fetch/${url}`;
 }

}
