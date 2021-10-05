import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Pipe1Pipe } from './pipe1.pipe';
import { Directive1Directive } from './directive1.directive';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { FPSPipe } from './fps.pipe';
import { BattleRoyalePipe } from './battle-royale.pipe';

@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Pipe1Pipe,
    Directive1Directive,
    ContentCardComponent,
    ContentListComponent,
    FPSPipe,
    BattleRoyalePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
