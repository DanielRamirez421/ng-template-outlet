import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-as-template',
  templateUrl: './component-as-template.component.html'
})
export class ComponentAsTemplateComponent implements OnInit {

  public data = {
    title: "Component as template example",
    color: "lightPurple",
    amount: 313.2,
    type: "shop",
    percent: 45,
    iconName: "icon-shop"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
