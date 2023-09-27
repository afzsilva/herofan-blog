import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem.model';
import { ApiheroService } from 'src/app/services/api/apihero.service';

@Component({
  selector: 'app-smallcard-list',
  templateUrl: './smallcard-list.component.html',
  styleUrls: ['./smallcard-list.component.css']
})
export class SmallcardListComponent implements OnInit {

  recentes:Personagem[] = [];
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
    this.addTresPersonagems();
  }


  carregarTresUlimos(){
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

  addTresPersonagems(){
    this.apiService.getSmallCardList().subscribe(data =>{
      for(let i=0; i < 3;i++){
        this.recentes[i] = data.results[this.gerarIdAleatorioEnetre(0, data.results.length - 1)];
      }

    })
  }

  private gerarIdAleatorioEnetre(inicio:number, fim:number):number{
    return Math.floor((Math.random() * fim) + inicio);
  }
}
