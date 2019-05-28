import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PadComponent } from './pad/pad.component';
import { PadcolumnComponent } from './padcolumn/padcolumn.component';

@NgModule({
  declarations: [
    AppComponent,
    PadComponent,
    PadcolumnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
