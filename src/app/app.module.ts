import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlayPauseService } from './play-pause.service';


import { AppComponent } from './app.component';
import { PadComponent } from './pad/pad.component';
import { PadcolumnComponent } from './padcolumn/padcolumn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickComponent } from './click/click.component';
import { BoardComponent } from './board/board.component';
import { ConductorComponent } from './conductor/conductor.component';

@NgModule({
  declarations: [
    AppComponent,
    PadComponent,
    PadcolumnComponent,
    ClickComponent,
    BoardComponent,
    ConductorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [PlayPauseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
