import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem.model';
import { ShareDataService } from 'src/app/services/util/share-data.service';

@Component({
  selector: 'app-smallcard-item',
  templateUrl: './smallcard-item.component.html',
  styleUrls: ['./smallcard-item.component.css']
})
export class SmallcardItemComponent implements OnInit {

  @Input() personagemsRecentes:Personagem[] = [];

  constructor(private shareDataService:ShareDataService) { }

  ngOnInit(): void {

    //console.log("Smallcard Item");
    //console.log(this.personagemsRecentes);

  }

  aoSelecionarPersonagem(personagem:Personagem){
    this.shareDataService.setPersonagem(personagem);
  }

}
