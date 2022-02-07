import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: [CardService]
})
export class CardsComponent implements OnInit {
  cards;
  
  constructor(cardService: CardService) {
    this.cards = cardService.getCardsInfo();
   }

  ngOnInit(): void {
  }

}
