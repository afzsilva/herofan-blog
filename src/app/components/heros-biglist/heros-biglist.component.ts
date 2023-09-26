import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Personagem } from 'src/app/model/personagem.model';
import { Personagems } from 'src/app/model/personagems-list.model';
import { ApiheroService } from 'src/app/services/api/apihero.service';
import { ShareDataService } from 'src/app/services/util/share-data.service';

@Component({
  selector: 'app-heros-biglist',
  templateUrl: './heros-biglist.component.html',
  styleUrls: ['./heros-biglist.component.css']
})
export class HerosBiglistComponent implements OnInit {
  estrutura!:Personagems;
  bigListHeroes:Personagem[] = [];


  //dados paginação
  page:number = 1;
  count:number = 0;
  pageSize:number = 12;
 // pageSizes = [3, 6, 9];

  constructor(private apiService:ApiheroService,
              private shareDataService:ShareDataService) {}

  ngOnInit(): void {

    this.carregarListaPersonagems();

  }

  carregarListaPersonagems(){
    this.apiService.getListHeroes("A").subscribe({
      next:(value) =>{
          //value.forEach(e => console.log(e.name)
          this.estrutura = value //estrutura do json retornado
          this.bigListHeroes = this.estrutura.results; // lista resultante dentro do da estrutura
          this.count = this.bigListHeroes.length
          //console.log(this.estrutura.results)
      },
      error:(err) =>{
          console.log(err)
      },
    });
  }


  aoSelecionarPersonagem(personagem:Personagem){
    this.shareDataService.setPersonagem(personagem);
  }



}
