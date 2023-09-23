import { Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem.model';
import { ApiheroService } from 'src/app/services/api/apihero.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  personagem:Personagem;

  //imagem:string = ""; //https://dummyimage.com/900x400/dee2e6/6c757d.jpg

  constructor(private apiService:ApiheroService) {
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

    this.apiService.getHeroBigCard(this.gerarIdAleatorioEnetre(1,10))
    .subscribe(data =>{
       //this.imagem = data.image.url;
      //console.log(data);
      this.personagem = {
        id: data.id,
        name:data.name,
        image: data.image,
        biography: data.biography

      }

     // console.log(this.personagem);


    })
  }

  private gerarIdAleatorioEnetre(inicio:number, fim:number):number{
    return Math.floor((Math.random() * fim) + inicio);
  }

}
