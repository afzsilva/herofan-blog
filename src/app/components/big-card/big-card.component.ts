import { Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem.model';
import { ApiheroService } from 'src/app/services/api/apihero.service';
import { ShareDataService } from 'src/app/services/util/share-data.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  personagem:Personagem;

  constructor(private apiService:ApiheroService, private sharedataService:ShareDataService) {
    this.personagem = {
      id : 0,
      name :"",
      image:{
        url:""
      },
      biography:{
        publisher:""
      }
    }
  }

  ngOnInit(): void {
    this.sharedataService.currentPersonagem.subscribe(personagem => {
      this.personagem = personagem;
    })

    this.carregarPersonagem();


  }

  carregarPersonagem(){
    this.apiService.getHeroBigCard(this.gerarIdAleatorioEnetre(1,10))
    .subscribe(data =>{
      this.personagem = {
        id: data.id,
        name:data.name,
        image: data.image,
        biography: data.biography
      }
    })
  }

  private gerarIdAleatorioEnetre(inicio:number, fim:number):number{
    return Math.floor((Math.random() * fim) + inicio);
  }

}
