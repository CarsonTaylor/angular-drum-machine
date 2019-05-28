import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PadComponent } from './pad/pad.component';
import { PadcolumnComponent } from './padcolumn/padcolumn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickComponent } from './click/click.component';

@NgModule({
  declarations: [
    AppComponent,
    PadComponent,
    PadcolumnComponent,
    ClickComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
