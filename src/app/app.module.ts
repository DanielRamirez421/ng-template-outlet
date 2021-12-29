import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasicExampleComponent } from './components/basic-example/basic-example.component';
import { ComponentAsTemplateComponent } from './components/component-as-template/component-as-template.component';
import { CardComponent } from './components/card/card.component';
import { TemplateAsInputComponent } from './components/template-as-input/template-as-input.component';
import { ParentComponent } from './components/template-as-input/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicExampleComponent,
    ComponentAsTemplateComponent,
    CardComponent,
    TemplateAsInputComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
