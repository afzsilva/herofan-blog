import { Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem.model';
import { Personagems } from 'src/app/model/personagems-list.model';
import { ApiheroService } from 'src/app/services/api/apihero.service';
import { ShareDataService } from 'src/app/services/util/share-data.service';

@Component({
  selector: 'app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css']
})
export class MenuNavBarComponent implements OnInit {

  estrutura!:Personagems<Personagem>;
  listaPersonagemPequisado:Personagem[] = [];

  constructor(private apiService:ApiheroService, private sharedataService:ShareDataService) { }

  ngOnInit(): void {
  }

  pesquisarListaPersonagems(caratere:string){
    this.apiService.getListHeroes(caratere ? caratere : "A").subscribe({
      next:(value) =>{
          //value.forEach(e => console.log(e.name)
          this.estrutura = value //estrutura do json retornado
          this.listaPersonagemPequisado = this.estrutura.results; // lista resultante dentro do da estrutura
          // console.log(this.listaPersonagemPequisado);
          this.sharedataService.setPersonagems(this.listaPersonagemPequisado);
          // console.log(this.estrutura)

      },
      error:(err) =>{
          console.log(err)
      },
    });
  }


}
