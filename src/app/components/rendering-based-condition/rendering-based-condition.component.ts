import { datas } from './../../utils/utils';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rendering-based-condition',
  templateUrl: './rendering-based-condition.component.html',
})
export class RenderingBasedConditionComponent implements OnInit {

  public data = datas;
  @ViewChild('cardOne', { static: true }) cardOne: TemplateRef<any> | null = null;
  @ViewChild('cardTwo', { static: true }) cardTwo: TemplateRef<any> | null = null;

  constructor() {}

  ngOnInit(): void {}

  getSelectedComponentTemplate(type: string): TemplateRef<any> | null {
    switch (type) {
      case 'one':
        return this.cardOne;
      case 'two':
        return this.cardOne;
      default:
        return this.cardTwo;
    }
  }
}
