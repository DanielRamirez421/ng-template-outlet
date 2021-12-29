import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  @Input() data: {
    title: string;
    color: string;
    amount: number;
    type: string;
    percent: number;
    iconName: string;
  } | undefined;

  constructor() {}

  ngOnInit(): void {}
}
