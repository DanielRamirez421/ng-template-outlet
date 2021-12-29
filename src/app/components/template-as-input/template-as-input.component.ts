import { data } from './../../utils/utils';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-as-input',
  templateUrl: './template-as-input.component.html',
})
export class TemplateAsInputComponent implements OnInit {

  public data = data;

  constructor() { }

  ngOnInit(): void {
  }

}
