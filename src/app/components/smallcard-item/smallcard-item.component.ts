import { Component, Input, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem.model';

@Component({
  selector: 'app-smallcard-item',
  templateUrl: './smallcard-item.component.html',
  styleUrls: ['./smallcard-item.component.css']
})
export class SmallcardItemComponent implements OnInit {

  @Input() personagemsRecentes:Personagem[] = [];

  constructor() { }

  ngOnInit(): void {

    console.log("Smallcard Item");

    console.log(this.personagemsRecentes);

  }

}
