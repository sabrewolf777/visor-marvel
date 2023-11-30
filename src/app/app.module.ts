import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

//MODULES
import { MatTableModule } from '@angular/material/table' 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule} from '@angular/material/grid-list';
import { BitacoraComponent } from './components/bitacora/bitacora.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { Placement as PopperPlacement, Options } from '@popperjs/core';
import { ExitComponent } from './components/exit/exit.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    BitacoraComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
