import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent implements OnInit {

  @Input() template: TemplateRef<any> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
