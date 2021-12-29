import { data } from './../../utils/utils';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-as-template',
  templateUrl: './component-as-template.component.html'
})
export class ComponentAsTemplateComponent implements OnInit {

  public data = data;

  constructor() { }

  ngOnInit(): void {
  }

}
