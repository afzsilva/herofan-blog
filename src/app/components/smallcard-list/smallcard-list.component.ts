import { Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem.model';
import { ApiheroService } from 'src/app/services/api/apihero.service';

@Component({
  selector: 'app-smallcard-list',
  templateUrl: './smallcard-list.component.html',
  styleUrls: ['./smallcard-list.component.css']
})
export class SmallcardListComponent implements OnInit {

  recentes = new Array<Personagem>(3);
  personagemRetornado:Personagem;

  constructor(private apiService:ApiheroService) {
    this.personagemRetornado = {
    id: 0,
    name: '',
    image: {
      url: ''
    },
    biography: {
      publisher: ''
    }
  };
  }

  ngOnInit(): void {

    /*Chamar serviço 3 vezes com id aleatório*/
    for(let i=0; i < this.recentes.length;i++){

      this.apiService.getHeroBigCard(this.gerarIdAleatorioEnetre(1,10))
      .subscribe(data =>{
        if(!this.recentes.includes(data)){

          this.personagemRetornado = {
              id: data.id,
              name:data.name,
              image: data.image,
              biography: data.biography}

          this.recentes[i] = this.personagemRetornado;
        }

      })

    }//for
  }

  private gerarIdAleatorioEnetre(inicio:number, fim:number):number{
    return Math.floor((Math.random() * fim) + inicio);
  }
}
