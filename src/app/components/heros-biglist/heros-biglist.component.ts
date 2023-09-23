import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { Personagem } from 'src/app/model/personagem.model';
import { Personagems } from 'src/app/model/personagems-list.model';
import { ApiheroService } from 'src/app/services/api/apihero.service';

@Component({
  selector: 'app-heros-biglist',
  templateUrl: './heros-biglist.component.html',
  styleUrls: ['./heros-biglist.component.css']
})
export class HerosBiglistComponent implements OnInit {
  estrutura!:Personagems;
  bigListHeroes:Personagem[] = [];


  //dados paginação
  p: number = 1;
  page = 1;
  count = 0;
  pageSize = 12;
  pageSizes = [3, 6, 9];

  constructor(private apiService:ApiheroService) {}

  ngOnInit(): void {
    this.apiService.getListHeroes("A").subscribe({
      next:(value) =>{
          //value.forEach(e => console.log(e.name)
          this.estrutura = value
          this.bigListHeroes = this.estrutura.results;
          console.log(this.estrutura.results)
      },
      error:(err) =>{
          console.log(err)
      },
    });

  }

}
